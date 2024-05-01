import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';


export const AppRoutes: Routes = [
  {path: '', redirectTo:'home', pathMatch:'full'},
{path: 'home',
    loadChildren: () => import('./layout/pages/home/home.routes').then(m => m.HomeRoutes)},
{ path: 'enterprise-overview',
    loadChildren: () => import('./layout/pages/enterprise-overview/enterprise-overview.routes').then(m => m.EnterpriseOverviewRoutes)},
{path: 'site-overview',
    loadChildren: () => import('./layout/pages/site-overview/site-overview.routes').then(m => m.SiteOverviewRoutes)},
{path: 'login',
    loadChildren: () => import('./layout/pages/login/login.routes').then(m => m.LogInRoutes)},
{path: 'sign-up',
    loadChildren: () => import('./layout/pages/sign-up/sign-up.routes').then(m => m.SignUpRoutes)},
];  

  
  

