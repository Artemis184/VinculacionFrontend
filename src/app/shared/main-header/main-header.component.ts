import { Component, Input } from '@angular/core';
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

  toggleUserMenu() {
    this.userMenuOpen = !this.userMenuOpen;
  }

  verCuenta() {
    this.userMenuOpen = false;
    alert('Cuenta');
  }

  logout() {
    this.userMenuOpen = false;
    alert('Logout');
  }
}
