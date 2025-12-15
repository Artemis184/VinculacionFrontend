import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import {
  IonContent, IonHeader, IonToolbar, IonTitle, IonList, IonItem, IonLabel
} from '@ionic/angular/standalone';

@Component({
  standalone: true,
  selector: 'app-admin-alarmas',
  templateUrl: './admin-alarmas.page.html',
  styleUrls: ['./admin-alarmas.page.scss'],
  imports: [CommonModule, IonContent, IonHeader, IonToolbar, IonTitle, IonList, IonItem, IonLabel],
})
export class AdminAlarmasPage {
  private router = inject(Router);

  alarmas = [
    { id: 1, nombre: 'ALARMA #', direccion: 'ENTRE CALLE XYZ, DIAGONAL A CASA A' },
    { id: 2, nombre: 'ALARMA #', direccion: 'CALLE 10, CASA 5' },
  ];

  abrirDetalle(alarmaId: number) {
    this.router.navigate(['/admin-detalle']);
  }
}
