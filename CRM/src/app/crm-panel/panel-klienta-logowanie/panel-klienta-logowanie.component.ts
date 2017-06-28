import { Component, OnInit} from '@angular/core';
import { CrmServiceService, User } from '../crm-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'sbc-panel-klienta-logowanie',
  templateUrl: './panel-klienta-logowanie.component.html',
  styleUrls: ['./panel-klienta-logowanie.component.scss']
})
export class PanelKlientaLogowanieComponent implements OnInit {

//Zbiera dane użytkownika z formularza logowania
data:User = {
  login: "",
  haslo: "",
  status: false
};

//Zmienna przechowująca błędy logowania
validationError;

//Funkcja wysyłająca dane użytkownika do serwisu logowania z bazą danych.
formSubmit(){
   this.CrmService.loginUser(this.data).then(data => {
        this.validationError = data;
        if(this.validationError.provider === 4){
          this.CrmService.setUserInfo(this.validationError);
        }
      });
}

//Sprawdza czy istnieje sesja w pamięci przeglądarki z danymi użytkownika.
checkUserSession(){
 let userSession = this.CrmService.userInfo; 
    if(userSession.provider === 4){
      this.router.navigateByUrl("/panel-glowny");
    }
  
}

  constructor(private CrmService: CrmServiceService, private router: Router) {
     this.checkUserSession();
  }
  
  ngOnInit() {
   
  }

}
