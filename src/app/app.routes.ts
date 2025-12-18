import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'principal-usuariof',
    pathMatch: 'full',
  },
  {
    path: 'principal-usuariof',
    loadComponent: () =>
      import('./paginas/principal-usuariof/principal-usuariof.page').then(
        (m) => m.PrincipalUsuariofPage,
      ),
  },
  {
    path: 'datos-usuario-f',
    loadComponent: () =>
      import('./paginas/datos-usuario-f/datos-usuario-f.page').then(
        (m) => m.DatosUsuarioFPage,
      ),
  },
   {
    path: 'principal-administrador',
    loadComponent: () =>
      import('./paginas/principal-administrador/principal-administrador.page').then(
        (m) => m.PrincipalAdministradorPage,
      ),
  },
];

