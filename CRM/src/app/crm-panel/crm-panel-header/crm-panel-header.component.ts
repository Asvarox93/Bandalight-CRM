import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sbc-crm-panel-header',
  templateUrl: './crm-panel-header.component.html',
  styleUrls: ['./crm-panel-header.component.scss']
})
export class CrmPanelHeaderComponent implements OnInit {
  isCollapsed;
  
  constructor() { }

  ngOnInit() {
  }

}
