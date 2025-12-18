import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonMenuButton,
  IonMenu,
  IonList,
  IonItem,
  IonLabel,
  IonBadge,
  IonMenuToggle,
  IonCard,
  IonCardContent,
  IonButton,
  IonIcon,
} from '@ionic/angular/standalone';

@Component({
  standalone: true,
  selector: 'app-principal-administrador',
  templateUrl: './principal-administrador.page.html',
  styleUrls: ['./principal-administrador.page.scss'],
  imports: [
    CommonModule,
    IonContent,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonMenuButton,
    IonMenu,
    IonList,
    IonItem,
    IonLabel,
    IonBadge,
    IonMenuToggle,
    IonCard,
    IonCardContent,
    IonButton,
    IonIcon,
  ],
})
export class PrincipalAdministradorPage {
  private router = inject(Router);

  cuentaVisible = false;

  toggleCuenta() {
    this.cuentaVisible = !this.cuentaVisible;
  }

  verCuenta() {
    this.cuentaVisible = false;
    alert('Cuenta (demo)');
  }

  logout() {
    this.cuentaVisible = false;
    alert('Logout (demo)');
  }

  solicitudes = [
    { id: 1, estado: 'Pendiente' },
    { id: 2, estado: 'Pendiente' },
    { id: 3, estado: 'Pendiente' },
    { id: 4, estado: 'Pendiente' },
  ];

  get solicitudesCount(): number {
    return this.solicitudes.length;
  }

  alarmasAsignadas = [
    {
      id: 1,
      nombre: 'ALARMA # 001',
      direccion: 'ENTRE CALLE XYZ, DIAGONAL A CASA A',
      encendida: false,
    },
    {
      id: 2,
      nombre: 'ALARMA # 002',
      direccion: 'CALLE 10, CASA 5',
      encendida: true,
    },
    {
      id: 3,
      nombre: 'ALARMA # 003',
      direccion: 'AV. PRINCIPAL, EDIF. A',
      encendida: false,
    },
  ];

  toggleAlarma(alarma: any) {
    alarma.encendida = !alarma.encendida;
  }

  clickSolicitudes() {
    alert('Lista de solicitudes');
  }
  clickUsuarios() {
    alert('Lista de usuarios finales ');
  }
  clickAlarmas() {
    this.router.navigate(['lista-alarmas']);
  }
  clickAuditoria() {
    alert('Auditoría Activaciones');
  }
}
