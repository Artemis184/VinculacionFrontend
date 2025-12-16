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
  // 🔥 INYECCIÓN MODERNA (SOLUCIÓN AL LINT)
  private cuentaService = inject(CuentaUsuariF);
  private popoverCtrl = inject(PopoverController);

  usuario!: UsuarioFinal;

  ngOnInit() {
    this.usuario = this.cuentaService.getUsuario();
  }

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
