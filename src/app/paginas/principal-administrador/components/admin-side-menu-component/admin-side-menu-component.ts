import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';

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
  templateUrl: './admin-side-menu-component.html',
  styleUrls: ['./admin-side-menu-component.scss'],
  imports: [
    CommonModule,

    // Angular Router
    RouterLink, // 👈 ESTE FALTABA

    // Ionic
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
  @Input() solicitudesCount = 0;
}
