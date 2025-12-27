import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import {
  IonContent,
} from '@ionic/angular/standalone';


import { MainHeaderComponent } from '../../shared/main-header/main-header.component';
import { AlarmSwitchComponent } from '../../shared/alarm-switch/alarm-switch.component';
import { AdminSideMenuComponent } from './components/admin-side-menu-component/admin-side-menu-component.component';

@Component({
  standalone: true,
  selector: 'app-principal-administrador',
  templateUrl: './principal-administrador.page.html',
  styleUrls: ['./principal-administrador.page.scss'],
imports: [
  CommonModule,

  // Ionic
  IonContent,

  // Shared
  MainHeaderComponent,
  AlarmSwitchComponent,

  // Admin only
  AdminSideMenuComponent,
],

})
export class PrincipalAdministradorPage {
  private router = inject(Router);

  /* =========================
     CUENTA
  ========================= */
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

  /* =========================
     SOLICITUDES
  ========================= */
  solicitudes = [
    { id: 1, estado: 'Pendiente' },
    { id: 2, estado: 'Pendiente' },
    { id: 3, estado: 'Pendiente' },
    { id: 4, estado: 'Pendiente' },
  ];

  get solicitudesCount(): number {
    return this.solicitudes.length;
  }

  /* =========================
     ALARMAS (CON ESTADO UI)
  ========================= */
  alarmasAsignadas = [
    {
      id: 1,
      nombre: 'ALARMA # 001',
      direccion: 'ENTRE CALLE XYZ, DIAGONAL A CASA A',
      encendida: false,
      loading: false, // 🔑
    },
    {
      id: 2,
      nombre: 'ALARMA # 002',
      direccion: 'CALLE 10, CASA 5',
      encendida: true,
      loading: false,
    },
    {
      id: 3,
      nombre: 'ALARMA # 003',
      direccion: 'AV. PRINCIPAL, EDIF. A',
      encendida: false,
      loading: false,
    },
  ];

  /* =========================
     TOGGLE ALARMA (SIMULA BACKEND)
  ========================= */
async toggleAlarma(alarma: any) {
  if (alarma.loading) return;

  alarma.loading = true;

  try {
    const nuevoEstado = !alarma.encendida;
    await this.simularBackend();
    alarma.encendida = nuevoEstado;
  } finally {
    alarma.loading = false;
  }
}


  /* =========================
     SIMULACIÓN BACKEND
  ========================= */
  private simularBackend(): Promise<void> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 900); // ⏱ ajusta a gusto (500–1200ms)
    });
  }

  /* =========================
     MENÚ
  ========================= */
  clickSolicitudes() {
    this.router.navigate(['listado-pendientes-acciones']);
  }

  clickUsuarios() {
    alert('Lista de usuarios finales');
  }

  clickAlarmas() {
    this.router.navigate(['lista-alarmas']);
  }

  clickAuditoria() {
    this.router.navigate(['admin-auditoria']);
  }
}
