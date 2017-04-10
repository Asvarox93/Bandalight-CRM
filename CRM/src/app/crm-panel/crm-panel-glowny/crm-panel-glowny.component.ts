import { Component, OnInit } from '@angular/core';
import { CrmServiceService } from '../crm-service.service'
import { Router } from '@angular/router';

@Component({
  selector: 'sbc-crm-panel-glowny',
  templateUrl: './crm-panel-glowny.component.html',
  styleUrls: ['./crm-panel-glowny.component.scss']
})
export class CrmPanelGlownyComponent implements OnInit {

  constructor(private CrmService: CrmServiceService, private router: Router) { }

  ngOnInit() {
  }

}
