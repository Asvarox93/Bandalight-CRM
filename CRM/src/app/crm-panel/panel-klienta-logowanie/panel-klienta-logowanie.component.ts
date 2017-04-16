import { Component, OnInit} from '@angular/core';
import { CrmServiceService, User } from '../crm-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'sbc-panel-klienta-logowanie',
  templateUrl: './panel-klienta-logowanie.component.html',
  styleUrls: ['./panel-klienta-logowanie.component.scss']
})
export class PanelKlientaLogowanieComponent implements OnInit {


data:User = {
  login: "",
  haslo: "",
  status: false
};


validationError;

formSubmit(){
   this.CrmService.loginUser(this.data).then(data => {
        this.validationError = data;
        if(this.validationError.provider === 4){
          this.CrmService.setUserInfo(this.validationError);
          this.router.navigateByUrl("/panel-glowny");
        }
      });
}

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
