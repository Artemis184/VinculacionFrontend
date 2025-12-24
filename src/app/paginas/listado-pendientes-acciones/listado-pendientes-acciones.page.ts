import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonList,
  IonIcon,
  IonButtons,
  IonBackButton,
  IonButton,
  IonText,
  IonCard,
  IonItem,
  IonLabel,
} from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { chevronForwardOutline, personCircleOutline } from 'ionicons/icons';

import { UsuPendientes } from '../../servicios/usu-pendientes';

@Component({
  selector: 'app-listado-pendientes-acciones',
  templateUrl: './listado-pendientes-acciones.page.html',
  styleUrls: ['./listado-pendientes-acciones.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    IonContent,
    IonHeader,
    IonToolbar,
    IonList,
    IonIcon,
    IonButtons,
    IonBackButton,
    IonButton,
    IonCard,
  ],
})
export class ListadoPendientesAccionesPage implements OnInit {
  // Inyección usando inject()
  private usuariosService = inject(UsuPendientes);
  private router = inject(Router);

  usuarios: any[] = [];

  constructor() {
    addIcons({
      'chevron-forward-outline': chevronForwardOutline,
      'person-circle-outline': personCircleOutline,
    });
  }

  ngOnInit() {
    this.cargarUsuarios();
  }

  cargarUsuarios() {
    this.usuariosService.getUsuarios().subscribe((data) => {
      this.usuarios = data;
    });
  }

  verDetalle(usuario: any) {
    console.log('Click usuario:', usuario);
    this.router.navigate(['/listado-usu', usuario.id]);
  }
}
