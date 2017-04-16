import { Component, OnInit } from '@angular/core';
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
   let result = this.CrmService.registerUser(this.data);
   if(result){
     result.then(data => {
        this.validationError = data;
      });
   }
   this.router.navigateByUrl("/panel-klienta");
}

  constructor(private CrmService: CrmServiceService, private router: Router) { }

  ngOnInit() {
  }

}
