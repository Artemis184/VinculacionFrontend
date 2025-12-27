import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, PopoverController } from '@ionic/angular';

import { CuentaUsuariF, UsuarioFinal } from '../../servicios/cuenta-usuari-f';

import { MainHeaderComponent } from '../../shared/main-header/main-header.component';
import { AlarmSwitchComponent } from '../../shared/alarm-switch/alarm-switch.component';

@Component({
  selector: 'app-principal-usuariof',
  templateUrl: './principal-usuariof.page.html',
  styleUrls: ['./principal-usuariof.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,

    // Shared
    MainHeaderComponent,
    AlarmSwitchComponent, // 👈 ESTE FALTABA
  ],
})
export class PrincipalUsuariofPage implements OnInit {
  // 🔥 INYECCIÓN MODERNA
  private cuentaService = inject(CuentaUsuariF);
  private popoverCtrl = inject(PopoverController);

  usuario!: UsuarioFinal;

  // 🔔 ALARMA ASIGNADA AL USUARIO (UI)
  alarmasUsuario = [
    {
      id: 1,
      nombre: 'ALARMA #001',
      direccion: 'ENTRE LA CALLE XYZ, DIAGONAL A LA CASA',
      encendida: false,
      loading: false,
    },
  ];

  ngOnInit() {
    // Carga del usuario
    this.usuario = this.cuentaService.getUsuario();

    // Sincroniza estado UI
    this.alarmasUsuario[0].encendida = this.alarmasUsuario[0].encendida;

    // 🔌 FUTURO:
    // cargar alarma desde backend según usuario
  }

  /* =========================
     TOGGLE ALARMA (SIMULA BACKEND)
  ========================= */
  async toggleAlarma(alarma: any) {
    if (alarma.loading) return;

    alarma.loading = true;

    try {
      const nuevoEstado = !alarma.encendida;

      // ⏳ SIMULACIÓN DE BACKEND (reemplaza luego por API real)
      await this.simularBackend();

      // ✅ SOLO AQUÍ se mueve el switch
      alarma.encendida = nuevoEstado;
    } catch (error) {
      console.error('Error al cambiar estado de alarma', error);
      // aquí luego puedes meter shake / toast / etc.
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

  // 📂 MENÚ DE USUARIO
  async abrirMenu(ev: any) {
    const popover = await this.popoverCtrl.create({
      component: MainHeaderComponent,
      event: ev,
      side: 'bottom',
      alignment: 'start',
    });

    await popover.present();
  }
}
