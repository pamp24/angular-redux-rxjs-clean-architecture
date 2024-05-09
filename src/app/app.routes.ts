import { Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';


export const AppRoutes: Routes = [
    {path: '', 
     redirectTo:'enterprise-overview', 
     pathMatch:'full',
     },

    {path: 'enterprise-overview',
     canActivate:[AuthGuard],
        loadChildren: () => import('./pages/enterprise-overview/enterprise-overview.routes').then(m => m.EnterpriseOverviewRoutes)},
    
    {path: 'site-overview',
     canActivate:[AuthGuard],
        loadChildren: () => import('./pages/site-overview/site-overview.routes').then(m => m.SiteOverviewRoutes)},
    
    {path: 'auth',
        loadChildren: () => import('./auth/auth.routes').then(m => m.AuthRoutes)},

];  

  
  

