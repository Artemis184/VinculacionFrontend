import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent, IonHeader, IonToolbar, IonTitle, IonList, IonItem, IonLabel } from '@ionic/angular/standalone';

@Component({
  standalone: true,
  selector: 'app-admin-usuarios',
  templateUrl: './admin-usuarios.page.html',
  styleUrls: ['./admin-usuarios.page.scss'],
  imports: [CommonModule, IonContent, IonHeader, IonToolbar, IonTitle, IonList, IonItem, IonLabel],
})
export class AdminUsuariosPage {
  usuarios = [
    { id: 1, nombre: 'Juan Pérez', correo: 'juan@test.com' },
    { id: 2, nombre: 'Ana Torres', correo: 'ana@test.com' },
    { id: 3, nombre: 'Luisito', correo: 'luis@test.com' },
  ];
}
