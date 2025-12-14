import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from './login.service'; // MISMA CARPETA

export const AutentiGuard: CanActivateFn = (route, state) => {
  const auth = inject(LoginService);
  const router = inject(Router);

  if (!auth.getIsLogged()) {
    return router.parseUrl('/login');
  }

  const expectedRole = route.data?.['role'];
  const userRole = auth.getRole();

  if (expectedRole && userRole !== expectedRole) {
    if (userRole === 'admin')
      return router.parseUrl('/principal-administrador');
    if (userRole === 'final') return router.parseUrl('/principal-cliente');
    return router.parseUrl('/login');
  }

  return true;
};
