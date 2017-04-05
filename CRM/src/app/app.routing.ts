import { PomocPageComponent } from './pomoc-page/pomoc-page.component';
import { RouterModule, Routes } from '@angular/router';
import { OfertaComponent } from './oferta/oferta.component';
import { MainPageComponent } from './main-page/main-page.component';
import { KontaktPageComponent } from './kontakt-page/kontakt-page.component';
import { PanelKlientaPageComponent } from './panel-klienta-page/panel-klienta-page.component';


const routesConfig: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'oferta', component: OfertaComponent},
  {path: 'pomoc', component: PomocPageComponent},
  {path: 'kontakt', component: KontaktPageComponent},
  {path: 'panel-klienta', component: PanelKlientaPageComponent},      
  {path: '**', redirectTo: '',pathMatch: 'full'},
];

export const routerModule = RouterModule.forRoot(routesConfig, {});