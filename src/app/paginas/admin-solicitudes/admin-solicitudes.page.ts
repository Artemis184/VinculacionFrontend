import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent, IonHeader, IonToolbar, IonTitle, IonList, IonItem, IonLabel } from '@ionic/angular/standalone';

@Component({
  standalone: true,
  selector: 'app-admin-solicitudes',
  templateUrl: './admin-solicitudes.page.html',
  styleUrls: ['./admin-solicitudes.page.scss'],
  imports: [CommonModule, IonContent, IonHeader, IonToolbar, IonTitle, IonList, IonItem, IonLabel],
})
export class AdminSolicitudesPage {
  solicitudes = [
    { id: 1, asunto: 'Alta de usuario', estado: 'Pendiente' },
    { id: 2, asunto: 'Cambio de rol', estado: 'Pendiente' },
    { id: 3, asunto: 'Reset de clave', estado: 'Pendiente' },
  ];
}
