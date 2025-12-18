import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonAvatar,
} from '@ionic/angular/standalone';
import { NavController } from '@ionic/angular';

import { CuentaUsuariF, UsuarioFinal } from '../../servicios/cuenta-usuari-f';

@Component({
  selector: 'app-datos-usuario-f',
  templateUrl: './datos-usuario-f.page.html',
  styleUrls: ['./datos-usuario-f.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
    IonAvatar,
    CommonModule,
    FormsModule,
  ],
})
export class DatosUsuarioFPage implements OnInit {
  // 🔥 INYECCIÓN MODERNA (SOLUCIÓN AL LINT)
  private cuentaService = inject(CuentaUsuariF);
  private navCtrl = inject(NavController);

  usuario!: UsuarioFinal;

  // copia para comparar cambios
  usuarioOriginal!: UsuarioFinal;

  nuevaPassword = '';

  ngOnInit() {
    this.usuario = { ...this.cuentaService.getUsuario() };
    this.usuarioOriginal = { ...this.usuario };
  }

  hayCambios(): boolean {
    return (
      this.usuario.telefono !== this.usuarioOriginal.telefono ||
      this.usuario.foto !== this.usuarioOriginal.foto ||
      this.nuevaPassword.length > 0
    );
  }

  guardarCambios() {
    if (!this.hayCambios()) return;

    // Actualizar teléfono
    if (this.usuario.telefono !== this.usuarioOriginal.telefono) {
      this.cuentaService.actualizarTelefono(this.usuario.telefono);
    }

    // Actualizar foto
    if (this.usuario.foto !== this.usuarioOriginal.foto) {
      this.cuentaService.actualizarFoto(this.usuario.foto);
    }

    // Actualizar contraseña SOLO si se escribió una nueva
    if (this.nuevaPassword.trim().length > 0) {
      this.cuentaService.actualizarPassword(this.nuevaPassword);

      this.nuevaPassword = '';
    }

    // Actualizar copia original
    this.usuarioOriginal = { ...this.usuario };

    // Volver a la página principal
    this.navCtrl.navigateBack('/principal-usuariof');
  }

  salir() {
    this.navCtrl.navigateBack('/principal-usuariof');
  }
}
