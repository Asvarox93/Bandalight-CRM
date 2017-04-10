import { Component, OnInit } from '@angular/core';
import { CrmServiceService } from '../crm-service.service'
import { Router } from '@angular/router';

@Component({
  selector: 'sbc-panel-klienta-logowanie',
  templateUrl: './panel-klienta-logowanie.component.html',
  styleUrls: ['./panel-klienta-logowanie.component.scss']
})
export class PanelKlientaLogowanieComponent implements OnInit {

data = {};
loginValid;
validationError;

formSubmit(){
    this.loginValid = this.CrmService.loginFormCheck(this.data);
    if(this.loginValid == true){
      this.router.navigateByUrl("/panel-glowny");
    }else{
      this.validationError = "Błędny login lub hasło! Spróbuj ponownie."
    }
}

  constructor(private CrmService: CrmServiceService, private router: Router) {
      this.loginValid = this.CrmService.getLoginStatus();
      console.log(this.loginValid);
   }
  
  ngOnInit() {

  }

}
