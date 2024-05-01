import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';


export const AppRoutes: Routes = [
  {path: '', redirectTo:'enterprise-overview', pathMatch:'full'},
{ path: 'enterprise-overview',
    loadChildren: () => import('./layout/pages/enterprise-overview/enterprise-overview.routes').then(m => m.EnterpriseOverviewRoutes)},
{path: 'site-overview',
    loadChildren: () => import('./layout/pages/site-overview/site-overview.routes').then(m => m.SiteOverviewRoutes)},
{path: 'login',
    loadChildren: () => import('./layout/pages/login/login.routes').then(m => m.LogInRoutes)},

];  

  
  

