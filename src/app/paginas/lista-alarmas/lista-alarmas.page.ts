import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonItem,
  IonLabel,
  IonButton,
  IonCard,
  IonBadge,
  IonImg,
  IonButtons,
  IonBackButton,
} from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { Alarmas, Alarma } from 'src/app/servicios/alarmas';

@Component({
  selector: 'app-lista-alarmas',
  templateUrl: './lista-alarmas.page.html',
  styleUrls: ['./lista-alarmas.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonItem,
    IonLabel,
    IonButton,
    IonCard,
    IonBadge,
    IonImg,
    IonButtons,
    IonBackButton,
  ],
})
export class ListaAlarmasPage implements OnInit {
  alarmas: Alarma[] = [];

  private alarmasService = inject(Alarmas);
  private router = inject(Router);

  ngOnInit() {
    this.cargarAlarmas();
  }

  ionViewWillEnter() {
    this.cargarAlarmas();
  }

  cargarAlarmas() {
    this.alarmas = this.alarmasService.getAlarmas();
  }

  irAEditar(id: number) {
    this.router.navigate(['editar-alarma', id]);
  }

  estadoActiva(a: Alarma) {
    return a.is_active ? 'Activa' : 'Inactiva';
  }
  estadoHabilitada(a: Alarma) {
    return a.is_enabled ? 'Habilitada' : 'Deshabilitada';
  }

  colorActiva(a: Alarma) {
    return a.is_active ? 'success' : 'danger';
  }
  colorHabilitada(a: Alarma) {
    return a.is_enabled ? 'primary' : 'medium';
  }
}
