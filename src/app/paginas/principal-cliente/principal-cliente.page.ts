import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonButton,
  IonIcon,
  IonList,
  IonItem,
  IonLabel,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
} from '@ionic/angular/standalone';

import { LoginService } from '../../servicios/login.service';

@Component({
  standalone: true,
  selector: 'app-principal-cliente',
  templateUrl: './principal-cliente.page.html',
  styleUrls: ['./principal-cliente.page.scss'],
  imports: [
    CommonModule,
    IonContent,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonButton,
    IonIcon,
    IonList,
    IonItem,
    IonLabel,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
  ],
})
export class PrincipalClientePage {
  menuVisible = false;

  // nodos de ejemplo (luego los llenas desde tu API)
  nodosAsignados = [
    { nombre: 'Alarma Casa', estado: 'Activa' },
    { nombre: 'Alarma Oficina', estado: 'Inactiva' },
    { nombre: 'Alarma Bodega', estado: 'Activa' },
  ];

  private loginService = inject(LoginService);

  toggleMenu() {
    this.menuVisible = !this.menuVisible;
  }

  verDatosUsuario() {
    // más adelante: modal o página de perfil
    alert('Aquí irían los datos del usuario');
  }

  logout() {
    this.loginService.logout();
  }
}
