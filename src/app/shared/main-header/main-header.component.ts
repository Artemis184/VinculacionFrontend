import { Component, Input, inject } from '@angular/core';
import { Router } from '@angular/router';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonMenuButton,
  IonButton,
  IonIcon,
} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss'],
  imports: [
    CommonModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonMenuButton,
    IonButton,
    IonIcon,
  ],
})
export class MainHeaderComponent {
  /** Texto del título */
  @Input() title = '';

  /** Mostrar menú lateral (admin) */
  @Input() showMenu = false;

  /** Mostrar menú de usuario */
  @Input() showUserMenu = true;

  /** Control popup usuario */
  userMenuOpen = false;

  /** Router para navegación */
  private router = inject(Router);

  toggleUserMenu() {
    this.userMenuOpen = !this.userMenuOpen;
  }

  verCuenta() {
    this.userMenuOpen = false;
    this.router.navigateByUrl('/datos-usuario-f');
  }

  goHome() {
    this.userMenuOpen = false;
    const role = localStorage.getItem('role');

    if (role === 'ADMIN') {
      this.router.navigateByUrl('/principal-administrador');
    } else {
      this.router.navigateByUrl('/principal-usuariof');
    }
  }

  logout() {
    this.userMenuOpen = false;
    // Limpiar datos de sesión
    localStorage.removeItem('role');
    localStorage.removeItem('token');
    // Redirigir al login u home
    this.router.navigateByUrl('/login');
  }
}
