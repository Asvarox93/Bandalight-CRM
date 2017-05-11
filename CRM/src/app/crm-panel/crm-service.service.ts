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

//Zmienne praconików
workers;
$workerLists;
workerStream = new Subject();
workerData;

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

//Wysyłanie danych nowego zlecenia do bazy danych
sendWorkerToDB(data){
  var firebase = require("firebase");
  var user:any = firebase.auth().currentUser;
  var database = firebase.database();
  var ref =  database.ref('/users/'+user.uid+'/workers');
  ref.push(data);
  this.getWorkersFromDb();
}

//Przypisywanie aktualnych klientów do zmiennej klientData
setKlientData(data){
 this.klientData = data;
}

//Przypisywanie aktualnych zlecen do zmiennej orderData
setOrderData(data){
 this.orderData = data;
}

//Przypisywanie aktualnych zlecen do zmiennej orderData
setWorkerData(data){
 this.workerData = data;
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

      if(this.$klientLists != null || this.$klientLists != undefined){
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
        else if(this.orderData != ""){
          if(this.$orderLists[id].nazwa.lastIndexOf(this.orderData) != -1){
          this.orders.push(this.$orderLists[id]);
          }
        }
      }
    }
     this.orderStream.next(this.orders);
  });
}

//Pobieranie aktualnych pracowników z bazy danych, oraz przypisanie ich do odpowiedniej zmiennej
getWorkersFromDb(){
  var firebase = require("firebase");
  var user:any = firebase.auth().currentUser;
  var database = firebase.database();

  var ref =  database.ref('/users/'+user.uid+'/workers');
 
  this.workers = [];
  this.$workerLists = [];

  ref.on('value', (snapshot)=>{
      this.$workerLists = snapshot.val();

     if(this.$workerLists != null || this.$workerLists != undefined){
        for(let id of Object.keys(this.$workerLists)){
        if(this.workerData == ""){
          this.workers.push(this.$workerLists[id]);
        }
        else if(this.workerData != ""){
          if(this.$workerLists[id].nazwisko.lastIndexOf(this.workerData) != -1){
          this.workers.push(this.$workerLists[id]);
          }
        }
      }
    }
     this.workerStream.next(this.workers);
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

//Tworzenie obiektu do obserwowania pracowników na zmianny w innych komponentach
subscribeToGetWorkers(){
  return Observable.from(this.workerStream);
}

//Pobieranie aktualnych danych klienta potrzebnych do jego edycji
getKlientToEdit(data){
  return this.klients[data];
}

//Pobieranie aktualnych danych zlecenia potrzebnych do edycji
getOrdersToEdit(data){
  return this.orders[data];
}

//Pobieranie aktualnych danych pracownika potrzebnych do edycji
getWorkerToEdit(data){
  return this.workers[data];
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

//Edytowanie zlecenia w bazie danych po zatwierdzeniu modyfikacji przez użytkownika
editOrdersToDb(name, data){
  var firebase = require("firebase");
  var user:any = firebase.auth().currentUser;
  var database = firebase.database(); 
  var ref =  database.ref('/users/'+user.uid+'/orders/'+Object.keys(this.$orderLists)[name]);
  ref.update(data);
  this.getOrdersFromDb();

}

//Edytowanie pracownika w bazie danych po zatwierdzeniu modyfikacji przez użytkownika
editWorkersToDb(name, data){
  var firebase = require("firebase");
  var user:any = firebase.auth().currentUser;
  var database = firebase.database(); 
  var ref =  database.ref('/users/'+user.uid+'/workers/'+Object.keys(this.$workerLists)[name]);
  ref.update(data);
  this.getWorkersFromDb();

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

//Usuwanie zlecenia z bazy danych
deleteOrersFromDB(name){
  var firebase = require("firebase");
  var user:any = firebase.auth().currentUser;
  var database = firebase.database(); 
  var ref =  database.ref('/users/'+user.uid+'/orders/'+Object.keys(this.$orderLists)[name]);
  ref.remove();
  this.getOrdersFromDb();
}

//Usuwanie pracownika z bazy danych
deleteWorkerFromDB(name){
  var firebase = require("firebase");
  var user:any = firebase.auth().currentUser;
  var database = firebase.database(); 
  var ref =  database.ref('/users/'+user.uid+'/workers/'+Object.keys(this.$workerLists)[name]);
  ref.remove();
  this.getWorkersFromDb();
}


 
  constructor(private af:AngularFire) { 
    if(sessionStorage.getItem('currentUser')){
      this.userInfo = JSON.parse(sessionStorage.getItem('currentUser'));
      this.klientData = "";
      this.orderData = "";
      this.workerData = "";
    }
    else{
      this.userInfo = '';
    }
  }

}
