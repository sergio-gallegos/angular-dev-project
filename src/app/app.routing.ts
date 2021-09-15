import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './_dashboard/_dashboard.component';

const appRoutes: Routes = [
  { path: '', component: DashboardComponent },
];

export const AppRoutes = RouterModule.forRoot(appRoutes, { useHash: true });

