import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'principal-administrador',
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
  {
    path: 'lista-alarmas',
    loadComponent: () =>
      import('./paginas/lista-alarmas/lista-alarmas.page').then(
        (m) => m.ListaAlarmasPage,
      ),
  },
  {
    path: 'editar-alarma/:id',
    loadComponent: () =>
      import('./paginas/editar-alarma/editar-alarma.page').then(
        (m) => m.EditarAlarmaPage,
      ),
  },
  {
    path: 'admin-auditoria',
    loadComponent: () =>
      import('./paginas/admin-auditoria/admin-auditoria.page').then(
        (m) => m.AdminAuditoriaPage,
      ),
  },
  {
    path: 'listado-pendientes-acciones',
    loadComponent: () =>
      import('./paginas/listado-pendientes-acciones/listado-pendientes-acciones.page').then(
        (m) => m.ListadoPendientesAccionesPage,
      ),
  },
  {
    path: 'listado-usu/:id',
    loadComponent: () =>
      import('./paginas/listado-usu/listado-usu.page').then(
        (m) => m.ListadoUsuPage,
      ),
  },
];
