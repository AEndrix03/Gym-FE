import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'distretto',
    loadComponent: () =>
      import('./anagrafica-distretto/anagrafica-distretto.component').then(
        (m) => m.AnagraficaDistrettoComponent
      ),
  },
  {
    path: 'muscolo',
    loadComponent: () =>
      import('./anagrafica-muscolo/anagrafica-muscolo.component').then(
        (m) => m.AnagraficaMuscoloComponent
      ),
  },
  {
    path: 'esercizio',
    loadComponent: () =>
      import('./anagrafica-esercizio/anagrafica-esercizio.component').then(
        (m) => m.AnagraficaEsercizioComponent
      ),
  },
];
