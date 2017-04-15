import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AgmCoreModule } from 'angular2-google-maps/core';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {routerModule} from './app.routing';
import {CrmPanelModule} from './crm-panel/crm-panel.module';

import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainPageServiceService } from './main-page/mainPageService.service';
import { OfertaComponent } from './oferta/oferta.component';
import { PomocPageComponent } from './pomoc-page/pomoc-page.component';
import { KontaktPageComponent } from './kontakt-page/kontakt-page.component';

export const config = {
    apiKey: "AIzaSyBxYKlNybswUychAoL7IDtLnrnyGdDovl4",
    authDomain: "crm-bandalight.firebaseapp.com",
    databaseURL: "https://crm-bandalight.firebaseio.com",
    projectId: "crm-bandalight",
    storageBucket: "crm-bandalight.appspot.com",
    messagingSenderId: "574776466030"
  };

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    HeaderComponent,
    FooterComponent,
    OfertaComponent,
    PomocPageComponent,
    KontaktPageComponent,
    
    
  ],
  imports: [
    NgbModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCQ69tMh8Rs3kl0ayF03N5A0vG8zR4u2Ok'
    }),
    AngularFireModule.initializeApp(config),
    BrowserModule,
    FormsModule,
    HttpModule,
    routerModule,
    CrmPanelModule
  ],
  providers: [
    MainPageServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
