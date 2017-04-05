import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AgmCoreModule } from 'angular2-google-maps/core';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {routerModule} from './app.routing';

import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainPageServiceService } from './main-page/mainPageService.service';
import { OfertaComponent } from './oferta/oferta.component';
import { PomocPageComponent } from './pomoc-page/pomoc-page.component';
import { KontaktPageComponent } from './kontakt-page/kontakt-page.component';
import { PanelKlientaPageComponent } from './panel-klienta-page/panel-klienta-page.component';



@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    HeaderComponent,
    FooterComponent,
    OfertaComponent,
    PomocPageComponent,
    KontaktPageComponent,
    PanelKlientaPageComponent
  ],
  imports: [
    NgbModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCQ69tMh8Rs3kl0ayF03N5A0vG8zR4u2Ok'
    }),
    BrowserModule,
    FormsModule,
    HttpModule,
    routerModule
  ],
  providers: [
    MainPageServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
