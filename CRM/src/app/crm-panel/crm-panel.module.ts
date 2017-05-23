import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {routerModule} from '../app.routing';
import {FormsModule} from '@angular/forms';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import {CrmServiceService} from './crm-service.service';
import { PanelKlientaLogowanieComponent } from './panel-klienta-logowanie/panel-klienta-logowanie.component';
import { CrmPanelGlownyComponent } from './crm-panel-glowny/crm-panel-glowny.component';
import { CrmPanelHeaderComponent } from './crm-panel-header/crm-panel-header.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { PanelPulpitComponent } from './panel-pulpit/panel-pulpit.component';
import { PanelKlientaRejestracjaComponent } from './panel-klienta-rejestracja/panel-klienta-rejestracja.component';
import { CrmKlienciComponent } from './crm-klienci/crm-klienci.component';
import { CrmKlienciDodajComponent } from './crm-klienci/crm-klienci-dodaj.component';
import { CrmKlienciEdytujComponent } from './crm-klienci/crm-klienci-edytuj.component';
import { CrmZleceniaComponent } from './crm-zlecenia/crm-zlecenia.component';
import { CrmZleceniaDodajComponent } from './crm-zlecenia/crm-zlecenia-dodaj.component';
import { CrmZleceniaEdytujComponent } from './crm-zlecenia/crm-zlecenia-edytuj.component';
import { CrmPracownicyComponent } from './crm-pracownicy/crm-pracownicy.component';
import { CrmPracownicyDodajComponent } from './crm-pracownicy/crm-pracownicy-dodaj.component';
import { CrmPracownicyEdytujComponent } from './crm-pracownicy/crm-pracownicy-edytuj.component';
import { CrmKorespondecjaComponent } from './crm-korespondecja/crm-korespondecja.component';
import { CrmKorespondencjaDodajComponent } from './crm-korespondecja/crm-korespondencja-dodaj.component';
import { CrmKorespondencjaEdytujComponent } from './crm-korespondecja/crm-korespondencja-edytuj.component';
import { CrmPojazdyComponent } from './crm-pojazdy/crm-pojazdy.component';
import { CrmPojazdyDodajComponent } from './crm-pojazdy/crm-pojazdy-dodaj.component';
import { CrmPojazdyEdytujComponent } from './crm-pojazdy/crm-pojazdy-edytuj.component';

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
    BootstrapModalModule,
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
      PanelKlientaRejestracjaComponent,
      CrmKlienciComponent,
      CrmKlienciDodajComponent,
      CrmKlienciEdytujComponent,
      CrmZleceniaComponent,
      CrmZleceniaDodajComponent,
      CrmZleceniaEdytujComponent,
      CrmPracownicyComponent,
      CrmPracownicyDodajComponent,
      CrmPracownicyEdytujComponent,
      CrmKorespondecjaComponent,
      CrmKorespondencjaDodajComponent,
      CrmKorespondencjaEdytujComponent,
      CrmPojazdyComponent,
      CrmPojazdyDodajComponent,
      CrmPojazdyEdytujComponent
      ],
  entryComponents:[
    CrmKlienciDodajComponent,
    CrmKlienciEdytujComponent,
    CrmZleceniaDodajComponent,
    CrmZleceniaEdytujComponent,
    CrmPracownicyDodajComponent,
    CrmPracownicyEdytujComponent,
    CrmKorespondencjaDodajComponent,
    CrmKorespondencjaEdytujComponent,
    CrmPojazdyDodajComponent,
    CrmPojazdyEdytujComponent
  ],
  exports:[
    PanelKlientaLogowanieComponent
  ],
  providers:[
    CrmServiceService
  ]
})
export class CrmPanelModule { }
