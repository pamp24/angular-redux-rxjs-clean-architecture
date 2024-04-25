import { Routes } from '@angular/router';



export const routes: Routes = [
  {path: '', redirectTo:'home', pathMatch:'full'},
  {path: 'home',
    loadChildren: () => import('./pages/home/home.routes').then(m => m.HomeRoutes)},
  { path: 'enterprise-overview',
    loadChildren: () => import('./pages/enterprise-overview/enterprise-overview.routes').then(m => m.EnterpriseOverviewRoutes)},
  {path: 'site-overview',
    loadChildren: () => import('./pages/site-overview/site-overview.routes').then(m => m.SiteOverviewRoutes)},
  {path: 'login',
    loadChildren: () => import('./pages/login/login.routes').then(m => m.LoginRoutes)},

];

  
  

