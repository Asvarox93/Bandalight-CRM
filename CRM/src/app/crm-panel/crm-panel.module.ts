import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {routerModule} from '../app.routing';
import {FormsModule} from '@angular/forms';
import {CrmServiceService} from './crm-service.service';
import { PanelKlientaLogowanieComponent } from './panel-klienta-logowanie/panel-klienta-logowanie.component';
import { CrmPanelGlownyComponent } from './crm-panel-glowny/crm-panel-glowny.component';
import { CrmPanelHeaderComponent } from './crm-panel-header/crm-panel-header.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { PanelPulpitComponent } from './panel-pulpit/panel-pulpit.component';
import { PanelKlientaRejestracjaComponent } from './panel-klienta-rejestracja/panel-klienta-rejestracja.component';

export const config = {
    apiKey: "AIzaSyBxYKlNybswUychAoL7IDtLnrnyGdDovl4",
    authDomain: "crm-bandalight.firebaseapp.com",
    databaseURL: "https://crm-bandalight.firebaseio.com",
    projectId: "crm-bandalight",
    storageBucket: "crm-bandalight.appspot.com",
    messagingSenderId: "574776466030"
  };

export const myFirebaseAuthConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
};

@NgModule({
  imports: [
    NgbModule.forRoot(),
    AngularFireModule.initializeApp(config, myFirebaseAuthConfig),
    CommonModule,
    routerModule,
    FormsModule
    ],
  declarations: [
    PanelKlientaLogowanieComponent,
     CrmPanelGlownyComponent,
      CrmPanelHeaderComponent,
      PanelPulpitComponent,
      PanelKlientaRejestracjaComponent
      ],
  exports:[
    PanelKlientaLogowanieComponent
  ],
  providers:[
    CrmServiceService
  ]
})
export class CrmPanelModule { }
