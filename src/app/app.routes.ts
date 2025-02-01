import { Routes } from '@angular/router';
import { DashboardComponent } from '@aredegalli/dashboard-primeng';

export const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./home/home.component').then((m) => m.HomeComponent),
      },
      {
        path: 'anagrafica',
        loadChildren: () =>
          import('./anagrafica/anagrafica.routes').then((m) => m.routes),
      },
    ],
  },
];
