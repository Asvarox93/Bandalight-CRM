import { PomocPageComponent } from './pomoc-page/pomoc-page.component';
import { RouterModule, Routes } from '@angular/router';
import { OfertaComponent } from './oferta/oferta.component';
import { MainPageComponent } from './main-page/main-page.component';
import { KontaktPageComponent } from './kontakt-page/kontakt-page.component';
import { PanelKlientaLogowanieComponent } from './crm-panel/panel-klienta-logowanie/panel-klienta-logowanie.component';
import { PanelKlientaRejestracjaComponent } from './crm-panel/panel-klienta-rejestracja/panel-klienta-rejestracja.component';
import { CrmPanelGlownyComponent } from './crm-panel/crm-panel-glowny/crm-panel-glowny.component';
import { PanelPulpitComponent } from './crm-panel/panel-pulpit/panel-pulpit.component';
import { CrmKlienciComponent } from './crm-panel/crm-klienci/crm-klienci.component';
import { CrmZleceniaComponent } from './crm-panel/crm-zlecenia/crm-zlecenia.component';
import { CrmPracownicyComponent } from './crm-panel/crm-pracownicy/crm-pracownicy.component';
import { CrmKorespondecjaComponent } from './crm-panel/crm-korespondecja/crm-korespondecja.component';
import { CrmPojazdyComponent } from './crm-panel/crm-pojazdy/crm-pojazdy.component';
import { CrmProduktyComponent } from './crm-panel/crm-produkty/crm-produkty.component';


const routesConfig: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'oferta', component: OfertaComponent},
  {path: 'pomoc', component: PomocPageComponent},
  {path: 'kontakt', component: KontaktPageComponent},
  {path: 'panel-klienta', component: PanelKlientaLogowanieComponent},
  {path: 'rejestracja', component: PanelKlientaRejestracjaComponent},
  {path: 'panel-glowny', component: CrmPanelGlownyComponent,
      children:[
        {path: '', component: PanelPulpitComponent},
        {path: 'klienci', component: CrmKlienciComponent},
        {path: 'zlecenia', component: CrmZleceniaComponent},
        {path: 'pracownicy', component: CrmPracownicyComponent},
        {path: 'korespondencja', component: CrmKorespondecjaComponent},
        {path: 'pojazdy', component: CrmPojazdyComponent},
        {path: 'produkty', component: CrmProduktyComponent}
        
        
        
      ]},      
  {path: '**', redirectTo: '',pathMatch: 'full'},
];

export const routerModule = RouterModule.forRoot(routesConfig, {});