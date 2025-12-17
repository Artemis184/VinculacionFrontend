import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'principal-administrador',
    pathMatch: 'full',
  },
   {
    path: 'principal-administrador',
    loadComponent: () =>
      import('./paginas/principal-administrador/principal-administrador.page').then(
        (m) => m.PrincipalAdministradorPage,
      ),
  },
];
