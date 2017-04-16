import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';
import {AngularFire, AuthProviders, AuthMethods} from 'angularfire2';

export interface User{
  login:string;
  haslo:string;
  status?:boolean;
  name?:string;
}

@Injectable()
export class CrmServiceService {


registerUser(user: User) {
  let res: Promise<boolean> = new Promise((resolve, reject) =>{
  this.af.auth.createUser({
        email: user.login,
        password: user.haslo,
      }).then(
        (success) => {
           let user:any = firebase.auth().currentUser;
           console.log("zalozlony", success);
           resolve(success);
           user.sendEmailVerification().then(
             (success) => {console.log("Zweryfikuj swój adres email!"); resolve(success);} 
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


 //   let getLoginValid = JSON.parse(sessionStorage.getItem('currentUser'));
   
  constructor(private af:AngularFire) { }

}
