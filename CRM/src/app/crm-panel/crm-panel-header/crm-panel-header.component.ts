import { Component, OnInit } from '@angular/core';
import { CrmServiceService } from '../crm-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'sbc-crm-panel-header',
  templateUrl: './crm-panel-header.component.html',
  styleUrls: ['./crm-panel-header.component.scss']
})
export class CrmPanelHeaderComponent implements OnInit {
  isCollapsed;
  login;

  logoutUser(){
    this.crmService.logoutUser()
    this.router.navigateByUrl("/");
  }

  constructor(private crmService:CrmServiceService, private router: Router) {
  }

  ngOnInit() {
   this.login =  this.crmService.userInfo.email;
  }

}
