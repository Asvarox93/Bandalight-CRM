import { Component, OnInit, EventEmitter } from '@angular/core';
import { CrmServiceService, User } from '../crm-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'sbc-panel-klienta-rejestracja',
  templateUrl: './panel-klienta-rejestracja.component.html',
  styleUrls: ['./panel-klienta-rejestracja.component.scss']
})
export class PanelKlientaRejestracjaComponent implements OnInit {
 
  data:User = {
  login: "",
  haslo: ""
};


validationError;

formSubmit(){
   this.CrmService.registerUser(this.data).then(result =>{
    this.validationError = result;
    console.log(this.validationError);
    if(this.validationError.uid != null || this.validationError.uid != undefined){
        this.CrmService.setRegStatus(this.validationError.email);
        this.router.navigateByUrl("/panel-klienta");
    }
  })
}

  constructor(private CrmService: CrmServiceService, private router: Router) {
  }

  ngOnInit() {
  }
  
}
