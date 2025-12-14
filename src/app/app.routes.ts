import { Routes } from '@angular/router';

//agregado ultimo
import { AutentiGuard } from './servicios/autenti.service';

export const routes: Routes = [
  {
    path: '',
<<<<<<< HEAD
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
=======
    redirectTo: 'login',
    pathMatch: 'full',
  },
  /*{
    path: 'principal-cliente',
    loadComponent: () => import('./paginas/principal-cliente/principal-cliente.page').then( m => m.PrincipalClientePage)
  },
  {
    path: 'principal-administrador',
    loadComponent: () => import('./paginas/principal-administrador/principal-administrador.page').then( m => m.PrincipalAdministradorPage)
  },*/
  {
    path: 'login',
    loadComponent: () =>
      import('./login/login/login.page').then((m) => m.LoginPage),
  },

  // USUARIO FINAL
  {
    path: 'principal-cliente',
    canActivate: [AutentiGuard],
    data: { role: 'final' },
    loadComponent: () =>
      import('./paginas/principal-cliente/principal-cliente.page').then(
        (m) => m.PrincipalClientePage,
      ),
  },

  // ADMIN
  {
    path: 'principal-administrador',
    canActivate: [AutentiGuard],
    data: { role: 'admin' },
<<<<<<< HEAD
    loadComponent: () =>import('./paginas/principal-administrador/principal-administrador.page').then(m => m.PrincipalAdministradorPage)
>>>>>>> 746c3e6 (Pirmer commit abdbasjbfhsdbh)
=======
    loadComponent: () =>
      import('./paginas/principal-administrador/principal-administrador.page').then(
        (m) => m.PrincipalAdministradorPage,
      ),
>>>>>>> 4aaa967 (Pirmer commit abdbasjbfhsdbh 23)
  },
];
