import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {routerModule} from '../app.routing';
import {FormsModule} from '@angular/forms';
import {CrmServiceService} from './crm-service.service';
import { PanelKlientaLogowanieComponent } from './panel-klienta-logowanie/panel-klienta-logowanie.component';
import { CrmPanelGlownyComponent } from './crm-panel-glowny/crm-panel-glowny.component';
import { CrmPanelHeaderComponent } from './crm-panel-header/crm-panel-header.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { PanelPulpitComponent } from './panel-pulpit/panel-pulpit.component';


@NgModule({
  imports: [
    NgbModule.forRoot(),
    CommonModule,
    routerModule,
    FormsModule
    ],
  declarations: [
    PanelKlientaLogowanieComponent,
     CrmPanelGlownyComponent,
      CrmPanelHeaderComponent,
      PanelPulpitComponent
      ],
  exports:[
    PanelKlientaLogowanieComponent
  ],
  providers:[
    CrmServiceService
  ]
})
export class CrmPanelModule { }
