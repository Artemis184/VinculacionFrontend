import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonContent, IonHeader, IonToolbar, IonButtons, IonButton, IonIcon
} from '@ionic/angular/standalone';

@Component({
  standalone: true,
  selector: 'app-admin-detalle',
  templateUrl: './admin-detalle.page.html',
  styleUrls: ['./admin-detalle.page.scss'],
  imports: [CommonModule, IonContent, IonHeader, IonToolbar, IonButtons, IonButton, IonIcon],
})
export class AdminDetallePage {
  encendida = false;

  toggle() {
    this.encendida = !this.encendida;
  }
}
