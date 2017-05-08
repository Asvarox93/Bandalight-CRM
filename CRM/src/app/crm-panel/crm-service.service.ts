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

//Zmienne klienta
$klientLists;
klients;
klientStream = new Subject();
klientData;

//Zmienne zlecenia
orders;
$orderLists;
orderStream = new Subject();
orderData;

//Przypisywanie informacji o użytkowaniu do zmiennej userInfo, oraz przchowywanie ich w sesji przeglądarki
setUserInfo(info){
  this.userInfo = info;
  sessionStorage.setItem('currentUser',JSON.stringify(this.userInfo));
}
//Funkcja odpowiadająca za rejestrację użytkowanika, wraz z dodaniem wszelkich informacji o użytkowniku do bazy danych
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
//Funkcja sprawdzająca czy danych użytkownik istnieje po podaniu loginu i hasła potrzebnych do uwierzytelnienia.
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
//Wylogowanie użytkownia, oraz usunięcie aktualnych danych użytkownika z pamięci.
logoutUser(){
  this.af.auth.logout();
  this.setUserInfo("");
}
//Wysyłanie danych klienta do bazy danych
sendKlientToDB(data){
  var firebase = require("firebase");
  var user:any = firebase.auth().currentUser;
  var database = firebase.database();
  var ref =  database.ref('/users/'+user.uid+'/clients');
  ref.push(data);
  this.getKlientFromDb();
}

//Wysyłanie danych nowego zlecenia do bazy danych
sendOrderToDB(data){
  var firebase = require("firebase");
  var user:any = firebase.auth().currentUser;
  var database = firebase.database();
  var ref =  database.ref('/users/'+user.uid+'/orders');
  ref.push(data);
  this.getOrdersFromDb();
}
//Przypisywanie aktualnych klientów do zmiennej klientData
setKlientData(data){
 this.klientData = data;
}

//Przypisywanie aktualnych zlecen do zmiennej orderData
setOrderData(data){
 this.orderData = data;
}
// Pobieranie aktualnych klientów z bazy danych, oraz przypisywanie ich do odpowiedniej zmiennej
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

//Pobieranie aktualnych zleceń z bazy danych, oraz przypisanie ich do odpowiedniej zmiennej
getOrdersFromDb(){
  var firebase = require("firebase");
  var user:any = firebase.auth().currentUser;
  var database = firebase.database();

  var ref =  database.ref('/users/'+user.uid+'/orders');
 
  this.orders = [];
  this.$orderLists = [];

  ref.on('value', (snapshot)=>{
      this.$orderLists = snapshot.val();

     if(this.$orderLists != null || this.$orderLists != undefined){
        for(let id of Object.keys(this.$orderLists)){
        if(this.orderData == ""){
          this.orders.push(this.$orderLists[id]);
        }
        else if(this.klientData != ""){
          if(this.$orderLists[id].nazwa.lastIndexOf(this.orderData) != -1){
          this.orders.push(this.$orderLists[id]);
          }
        }
      }
    }
     this.orderStream.next(this.orders);
  });
}

//Tworzenie obiektu do obserwowania klientów na zmianny w innych komponentach
subscribeToGetKleints(){
  return Observable.from(this.klientStream);
}
//Tworzenie obiektu do obserwowania zleceń na zmianny w innych komponentach
subscribeToGetOrders(){
  return Observable.from(this.orderStream);
}
//Pobieranie aktualnych danych klienta potrzebnych do jego edycji
getKlientToEdit(data){
  return this.klients[data];
}
//Edytowanie klienta w bazie danych po zatwierdzeniu modyfikacji przez użytkownika
EditKleintToDb(name, data){
  var firebase = require("firebase");
  var user:any = firebase.auth().currentUser;
  var database = firebase.database(); 
  var ref =  database.ref('/users/'+user.uid+'/clients/'+Object.keys(this.$klientLists)[name]);
  ref.update(data);
  this.getKlientFromDb();

}

//Usuwanie klienta z bazy danych
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
      this.orderData = "";
    }
    else{
      this.userInfo = '';
    }
  }

}
