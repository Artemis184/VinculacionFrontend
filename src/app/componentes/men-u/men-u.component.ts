import { Component, inject } from '@angular/core';
import { IonContent, IonButton } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-men-u',
  standalone: true,
  templateUrl: './men-u.component.html',
  styleUrls: ['./men-u.component.scss'],
  imports: [IonContent, IonButton],
})
export class MenUComponent {
  // ✅ Inyección moderna (Angular recomendado)
  private router = inject(Router);
  private popoverCtrl = inject(PopoverController);

  irCuenta() {
    this.popoverCtrl.dismiss(); // cierra el menú
    this.router.navigate(['/datos-usuario-f']);
  }

  cerrarSesion() {
    this.popoverCtrl.dismiss(); // cierra el menú
    alert('Sesión cerrada');
  }

  cerrarMenu() {
    this.popoverCtrl.dismiss(); // solo cierra el popover
  }
}
