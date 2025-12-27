import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import {
  IonMenu,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonBadge,
  IonMenuToggle,
} from '@ionic/angular/standalone';

@Component({
  standalone: true,
  selector: 'app-admin-side-menu',
  templateUrl: './admin-side-menu-component.component.html',
  styleUrls: ['./admin-side-menu-component.component.scss'],
  imports: [
    CommonModule,
    IonMenu,
    IonContent,
    IonList,
    IonItem,
    IonLabel,
    IonBadge,
    IonMenuToggle,
  ],
})
export class AdminSideMenuComponent {
  private router = inject(Router);

  @Input() solicitudesCount = 0;

  goSolicitudes() {
    this.router.navigate(['listado-pendientes-acciones']);
  }

  goUsuarios() {
    alert('Lista de usuarios finales');
  }

  goAlarmas() {
    this.router.navigate(['lista-alarmas']);
  }

  goAuditoria() {
    this.router.navigate(['admin-auditoria']);
  }
}
