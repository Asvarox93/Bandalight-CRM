import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {routerModule} from '../app.routing';
import {FormsModule} from '@angular/forms';
import {CrmServiceService} from './crm-service.service';
import { PanelKlientaLogowanieComponent } from './panel-klienta-logowanie/panel-klienta-logowanie.component';
import { CrmPanelGlownyComponent } from './crm-panel-glowny/crm-panel-glowny.component';
import { CrmPanelHeaderComponent } from './crm-panel-header/crm-panel-header.component';

@NgModule({
  imports: [
    CommonModule,
    routerModule,
    FormsModule
    ],
  declarations: [PanelKlientaLogowanieComponent, CrmPanelGlownyComponent, CrmPanelHeaderComponent],
  exports:[
    PanelKlientaLogowanieComponent
  ],
  providers:[
    CrmServiceService
  ]
})
export class CrmPanelModule { }
