import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonMenuButton,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonList,
  IonItem,
  IonLabel
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
    IonGrid,
    IonRow,
    IonCol,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonList,
    IonItem,
    IonLabel
  ]
})
export class PrincipalAdministradorPage {

  // Datos de ejemplo para el dashboard
  promedioActivaciones = 3.4;
  totalAlarmas = 12;
  alarmasActivas = 8;

  activacionesPorAlarma = [
    { nombre: 'Alarma Casa', promedio: 4.2 },
    { nombre: 'Alarma Oficina', promedio: 3.1 },
    { nombre: 'Alarma Bodega', promedio: 2.7 },
  ];
}
