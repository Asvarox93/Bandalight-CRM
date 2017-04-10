import { Injectable } from '@angular/core';

@Injectable()
export class CrmServiceService {

  login:string = 'test';
  password:string ='123';

  loginFormCheck(data){
    if(this.login === data.login && this.password === data.haslo){
      sessionStorage.setItem('currentUser', JSON.stringify({loginValid: true}));
      console.log("zalogowany");
      return true;
    }else{
      console.log("nie zalogowany");
      return false;
    }
  }

  getLoginStatus(){
    let getLoginValid = JSON.parse(sessionStorage.getItem('currentUser'));
    if(!getLoginValid){
      return false;
    }
    else{
      console.log("To jest z JSON:", getLoginValid);
    }
  }
  constructor() { }

}
