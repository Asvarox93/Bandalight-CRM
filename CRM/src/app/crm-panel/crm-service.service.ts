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
$klientLists;
klients;
klientStream = new Subject();
klientData;


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
  this.getKlientFromDb();
}

setKlientData(data){
 this.klientData = data;
}

getKlientFromDb(){
  var firebase = require("firebase");
  var user:any = firebase.auth().currentUser;
  var database = firebase.database();

  var ref =  database.ref('/users/'+user.uid+'/clients');
 
  this.klients = [];
  this.$klientLists = [];

  ref.on('value', (snapshot)=>{
      this.$klientLists = snapshot.val();

      if(this.$klientLists != 0 || this.$klientLists != undefined){
        for(let id of Object.keys(this.$klientLists)){
        if(this.klientData == ""){
          this.klients.push(this.$klientLists[id]);
        }
        else if(this.klientData != ""){
          if(this.$klientLists[id].nazwa.lastIndexOf(this.klientData) != -1){
          this.klients.push(this.$klientLists[id]);
          }
        }
      }
    }
     this.klientStream.next(this.klients);
  });
  
 
 
}



subscribeToGetKleints(){
  return Observable.from(this.klientStream);
}

getKlientToEdit(data){
  return this.klients[data];
}

EditKleintToDb(name, data){
  var firebase = require("firebase");
  var user:any = firebase.auth().currentUser;
  var database = firebase.database(); 
  var ref =  database.ref('/users/'+user.uid+'/clients/'+Object.keys(this.$klientLists)[name]);
  ref.update(data);
  this.getKlientFromDb();

}


deleteKleintFromDB(name){
  var firebase = require("firebase");
  var user:any = firebase.auth().currentUser;
  var database = firebase.database(); 
  var ref =  database.ref('/users/'+user.uid+'/clients/'+Object.keys(this.$klientLists)[name]);
  ref.remove();
  this.getKlientFromDb();
}

 //   let getLoginValid = JSON.parse(sessionStorage.getItem('currentUser'));
 
  constructor(private af:AngularFire) { 
    if(sessionStorage.getItem('currentUser')){
      this.userInfo = JSON.parse(sessionStorage.getItem('currentUser'));
      this.klientData = "";
    }
    else{
      this.userInfo = '';
    }
  }

}
