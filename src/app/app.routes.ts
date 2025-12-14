import { Routes } from '@angular/router';

//agregado ultimo
import { AutentiGuard } from './servicios/autenti.service';

export const routes: Routes = [
  {
    path: '',
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
    loadComponent: () => import('./login/login/login.page').then( m => m.LoginPage)
  },
  
  // USUARIO FINAL
  {
    path: 'principal-cliente',
    canActivate: [AutentiGuard],
    data: { role: 'final' },
    loadComponent: () =>import('./paginas/principal-cliente/principal-cliente.page').then(m => m.PrincipalClientePage)
  },

  // ADMIN
  {
    path: 'principal-administrador',
    canActivate: [AutentiGuard],
    data: { role: 'admin' },
    loadComponent: () =>import('./paginas/principal-administrador/principal-administrador.page').then(m => m.PrincipalAdministradorPage)
  },
];
