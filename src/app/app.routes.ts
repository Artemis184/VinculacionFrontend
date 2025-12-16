import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
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
];
