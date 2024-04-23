import { Routes } from '@angular/router';
import { EnterpriseOverviewComponent } from './pages/enterprise-overview/enterprise-overview.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { WorkplaceComponent } from './pages/workplace/workplace.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'welcome', component: WelcomeComponent},
  // { path: 'welcome', 
  //   loadChildren: () => import('./pages/welcome/welcome.routes').then(m => m.WELCOME_ROUTES) },
  { path: 'enterprise-overview', component: EnterpriseOverviewComponent},
  { path: 'workplace', component: WorkplaceComponent},
  { path: 'login', component: LoginComponent}
];
