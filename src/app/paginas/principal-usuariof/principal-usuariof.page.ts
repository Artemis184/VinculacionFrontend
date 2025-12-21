import { Component, OnInit, inject } from '@angular/core';
import { IonicModule, PopoverController } from '@ionic/angular';

import { CuentaUsuariF, UsuarioFinal } from '../../servicios/cuenta-usuari-f';
import { MenUComponent } from '../../componentes/men-u/men-u.component';

@Component({
  selector: 'app-principal-usuariof',
  templateUrl: './principal-usuariof.page.html',
  styleUrls: ['./principal-usuariof.page.scss'],
  standalone: true,
  imports: [
    IonicModule, // ✅ SOLO ESTO
  ],
})
export class PrincipalUsuariofPage implements OnInit {
  // 🔥 INYECCIÓN MODERNA
  private cuentaService = inject(CuentaUsuariF);
  private popoverCtrl = inject(PopoverController);

  usuario!: UsuarioFinal;

  // 🔔 ALARMA ASIGNADA AL USUARIO (UI)
  alarma = {
    id: 1,
    nombre: 'ALARMA #001',
    direccion: 'ENTRE LA CALLE XYZ, DIAGONAL A LA CASA',
    encendida: false,
  };

  ngOnInit() {
    // Carga del usuario
    this.usuario = this.cuentaService.getUsuario();

    // Sincroniza estado UI
    this.alarma.encendida = this.alarma.encendida;

    // 🔌 FUTURO:
    // cargar alarma desde backend según usuario
  }

  // 🔘 SWITCH ON / OFF
  toggleAlarma() {
    this.alarma.encendida = !this.alarma.encendida;

    // 🔌 FUTURO:
    // enviar estado al backend / IoT
    // ejemplo: alarmaService.cambiarEstado(this.alarma)
  }

  // 📂 MENÚ DE USUARIO
  async abrirMenu(ev: any) {
    const popover = await this.popoverCtrl.create({
      component: MenUComponent,
      event: ev,
      side: 'bottom',
      alignment: 'start',
    });

    await popover.present();
  }
}
