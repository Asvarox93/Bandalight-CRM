import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'sbc-crm-panel-glowny',
  templateUrl: './crm-panel-glowny.component.html',
  styleUrls: ['./crm-panel-glowny.component.scss']
})
export class CrmPanelGlownyComponent implements OnInit {

  
  constructor(private router: Router) {
   }

  ngOnInit() {
  }

}
