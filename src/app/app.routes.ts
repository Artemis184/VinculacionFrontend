import { Routes } from '@angular/router';

//agregado ultimo
import { AutentiGuard } from './servicios/autenti.service';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },

  {
    path: 'login',
    loadComponent: () =>
      import('./login/login/login.page').then((m) => m.LoginPage),
  },

  // ADMIN
  {
    path: 'principal-administrador',
    canActivate: [AutentiGuard],
    data: { role: 'admin' },
    loadComponent: () => import('./paginas/principal-administrador/principal-administrador.page').then((m) => m.PrincipalAdministradorPage,
      ),
  },
  {
    path: 'admin-solicitudes',
    loadComponent: () => import('./paginas/admin-solicitudes/admin-solicitudes.page').then( m => m.AdminSolicitudesPage)
  },
  {
    path: 'admin-usuarios',
    loadComponent: () => import('./paginas/admin-usuarios/admin-usuarios.page').then( m => m.AdminUsuariosPage)
  },
  {
    path: 'admin-alarmas',
    loadComponent: () => import('./paginas/admin-alarmas/admin-alarmas.page').then( m => m.AdminAlarmasPage)
  },
  {
    path: 'admin-detalle',
    loadComponent: () => import('./paginas/admin-detalle/admin-detalle.page').then( m => m.AdminDetallePage)
  },
];
