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

//Zmienna pokazująca komunikat o sukcesie rejestracji
regSuccess;
regBool;

//Pobieranie danych z formuarza rejestracji w celu wys. komunikatu o poprawnej rejestraci


//Funkcja wysyłająca dane użytkownika do serwisu logowania z bazą danych.
formSubmit(){
   this.CrmService.loginUser(this.data).then(data => {
        this.regSuccess = "";
        this.validationError = data;

        if(this.validationError.uid != null || this.validationError.uid != undefined ){
        this.CrmService.setUserInfo(this.validationError);;
        this.router.navigateByUrl("/panel-glowny");
        }
        
   });
      
};


//Sprawdza czy istnieje sesja w pamięci przeglądarki z danymi użytkownika.
checkUserSession(){
 let userSession = this.CrmService.userInfo; 
    if(userSession.uid != null || userSession.uid != undefined ){
      this.router.navigateByUrl("/panel-glowny");
    }
  
}

  constructor(private CrmService: CrmServiceService, private router: Router) {
     this.checkUserSession();
     this.regBool = false;
  }
  
  ngOnInit() {
   
  }
  
  ngAfterContentChecked(){
    if(this.CrmService.regStatus != "" || this.CrmService.regStatus != null || this.CrmService.regStatus != undefined ){
     this.CrmService.subscribeToGetRegStatus().subscribe((status)=>{
      if(this.regSuccess != status && this.regBool === false){
        this.regBool = true;
        this.regSuccess = "Konto zostalo pomyślnie założone";
      }
    }); 
   }
  }

}
