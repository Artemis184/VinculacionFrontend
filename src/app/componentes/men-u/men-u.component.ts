import { Component, inject } from '@angular/core';
import { IonContent, IonButton } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { PopoverController, ToastController } from '@ionic/angular';

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
  private toastCtrl = inject(ToastController);

  irCuenta() {
    this.popoverCtrl.dismiss();
    this.router.navigate(['/datos-usuario-f']);
  }

  async cerrarSesion() {
    await this.popoverCtrl.dismiss();

    const toast = await this.toastCtrl.create({
      message: 'Sesión cerrada correctamente',
      duration: 2000,
      position: 'bottom',
      color: 'medium',
      icon: 'log-out-outline',
    });

    await toast.present();
  }

  cerrarMenu() {
    this.popoverCtrl.dismiss();
  }
}
