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
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonMenuToggle,
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

    IonGrid,
    IonRow,
    IonCol,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
  ],
})
export class PrincipalAdministradorPage {
  private router = inject(Router);

  promedioActivaciones = 3.4;
  totalAlarmas = 12;
  alarmasActivas = 8;

  activacionesPorAlarma = [
    { nombre: 'Alarma Casa', promedio: 4.2 },
    { nombre: 'Alarma Oficina', promedio: 3.1 },
    { nombre: 'Alarma Bodega', promedio: 2.7 },
  ];

  botonAutoasignado = { texto: 'Botón autoasignado', accion: 'VER_ALARMAS' };

  solicitudes = [
    { id: 1, estado: 'Pendiente' },
    { id: 2, estado: 'Pendiente' },
    { id: 3, estado: 'Pendiente' },
  ];

  get solicitudesCount(): number {
    return this.solicitudes.length;
  }

  // ✅ YA NO alerts: NAVEGA a pantallas
  irSolicitudes() {
    this.router.navigate(['/admin-solicitudes']);
  }

  irUsuarios() {
    this.router.navigate(['/admin-usuarios']);
  }

  irAlarmas() {
    this.router.navigate(['/admin-alarmas']);
  }

  irAuditoria() {
    alert('Auditoría Activaciones (opcional)');
  }

  ejecutarBotonAutoasignado() {
    if (this.botonAutoasignado.accion === 'VER_ALARMAS') {
      this.router.navigate(['/admin-alarmas']);
    } else {
      alert('Acción no definida');
    }
  }
}
