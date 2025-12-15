import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';

export type UserRole = 'final' | 'admin';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private loggedIn = false;
  private userRole: UserRole | null = null;

  private router = inject(Router);

  login(username: string, password: string): Promise<UserRole> {
    return new Promise((resolve, reject) => {
      if (username === 'admin' && password === '123') {
        this.loggedIn = true;
        this.userRole = 'admin';
        resolve('admin');
      } else if (username === 'user' && password === '123') {
        this.loggedIn = true;
        this.userRole = 'final';
        resolve('final');
      } else {
        reject('Credenciales incorrectas');
      }
    });
  }

  logout() {
    this.loggedIn = false;
    this.userRole = null;
    this.router.navigate(['/login']);
  }

  getIsLogged(): boolean {
    return this.loggedIn;
  }

  getRole(): UserRole | null {
    return this.userRole;
  }
}
