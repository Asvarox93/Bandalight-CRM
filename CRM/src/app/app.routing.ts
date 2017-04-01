import { RouterModule, Routes } from '@angular/router';
import { OfertaComponent } from './oferta/oferta.component';
import { MainPageComponent } from './main-page/main-page.component';

const routesConfig: Routes = [
  {path:'', component: MainPageComponent},
  {path:'oferta', component: OfertaComponent},
  {path:'**', redirectTo:'',pathMatch:'full'},
];

export const routerModule = RouterModule.forRoot(routesConfig,{
  
});