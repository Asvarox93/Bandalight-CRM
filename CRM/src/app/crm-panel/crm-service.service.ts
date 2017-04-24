import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import 'rxjs/add/observable/fromPromise';
import {AngularFire, AuthProviders, AuthMethods} from 'angularfire2';

export interface User{
  login:string;
  haslo:string;
  status?:boolean;
}

@Injectable()
export class CrmServiceService {

userInfo;
klientLists;
klients
klientStream = new Subject();
timerSubscription;


setUserInfo(info){
  this.userInfo = info;
  sessionStorage.setItem('currentUser',JSON.stringify(this.userInfo));
}

registerUser(user: User) {
  let res: Promise<boolean> = new Promise((resolve, reject) =>{
  this.af.auth.createUser({
        email: user.login,
        password: user.haslo,
      }).then(
        (success) => {
           var firebase = require("firebase");
           let user:any = firebase.auth().currentUser;
           resolve(success);
           user.sendEmailVerification().then(
             (success) => {resolve("Zweryfikuj swój adres email!");} 
           ).catch(
             (err) => {
               console.log("email", err);
               resolve(err);
             }
           )

  })
 })
 return res;
}

loginUser (user:User){
  let res: Promise<boolean> = new Promise((resolve, reject) =>{
    this.af.auth.login({email: user.login, password: user.haslo}).then(result =>{ 
      resolve(result);
    }).catch((event) => {
      resolve(event.message);
    })
   });

  return res;
}

logoutUser(){
  this.af.auth.logout();
  this.setUserInfo("");
}

sendKlientToDB(data){
  var firebase = require("firebase");
  var user:any = firebase.auth().currentUser;
  var database = firebase.database();
  var ref =  database.ref('/users/'+user.uid+'/clients');
  ref.push(data);
}


getKlientFromDb(){
  var firebase = require("firebase");
  var user:any = firebase.auth().currentUser;
  var database = firebase.database();
  var ref =  database.ref('/users/'+user.uid+'/clients');
  this.klients = [];

  this.klientLists = [];
  ref.on('value', (data)=>{
   
      this.klientLists = data.val();
  });

  for(let id of Object.keys(this.klientLists)){
    this.klients.push(this.klientLists[id]);
  }
  this.subscribeToKlientsData();
  this.klientStream.next(this.klients);
}

subscribeToGetKleints(){
  return Observable.from(this.klientStream);
}

subscribeToKlientsData(){
    this.timerSubscription = Observable.timer(2000).first().subscribe(() => this.getKlientFromDb());
}

 //   let getLoginValid = JSON.parse(sessionStorage.getItem('currentUser'));
 
  constructor(private af:AngularFire) { 
    if(sessionStorage.getItem('currentUser')){
      this.userInfo = JSON.parse(sessionStorage.getItem('currentUser'));
      console.log(this.userInfo);
    }
    else{
      this.userInfo = '';
    }
  }

}
