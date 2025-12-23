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
import { ToastController, NavController } from '@ionic/angular'; // Importar ToastController
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
  private toastCtrl = inject(ToastController); // Inyectar el controlador de alertas

  usuario!: UsuarioFinal;

  // copia para comparar cambios
  usuarioOriginal!: UsuarioFinal;
  passwordActual = ''; // Nueva variable para la verificación
  nuevaPassword = '';

  ngOnInit() {
    this.usuario = { ...this.cuentaService.getUsuario() };
    this.usuarioOriginal = { ...this.usuario };
  }

  // Función genérica para mostrar alertas
  async mostrarMensaje(mensaje: string, color: 'success' | 'danger') {
    const toast = await this.toastCtrl.create({
      message: mensaje,
      duration: 2000, // Se quita solo en 2 segundos
      color: color, // 'success' para verde, 'danger' para rojo
      position: 'bottom',
      // No incluimos 'buttons' para que no salga la opción de aceptar
    });
    await toast.present();
  }

  hayCambios(): boolean {
    // 1. Validación de Teléfono (Siempre 10 dígitos)
    const soloNumeros = /^\d+$/;
    const telefonoValido =
      this.usuario.telefono.length === 10 &&
      soloNumeros.test(this.usuario.telefono);

    // 2. Validación de Contraseña
    const escribiendoNueva = this.nuevaPassword.trim().length > 0;
    const escribiendoActual = this.passwordActual.trim().length > 0;

    // Si escribe en CUALQUIERA de los dos campos de pass, ambos se vuelven obligatorios
    let seccionPassValida = true;
    if (escribiendoNueva || escribiendoActual) {
      seccionPassValida =
        escribiendoActual && this.nuevaPassword.trim().length >= 6;
    }

    // 3. ¿Hubo cambios reales?
    const huboCambioFoto = this.usuario.foto !== this.usuarioOriginal.foto;
    const huboCambioTelf =
      this.usuario.telefono !== this.usuarioOriginal.telefono;
    const huboCambioPass = escribiendoNueva;

    // El botón se activa si:
    // - El teléfono es válido (10 dígitos)
    // - La sección de password es coherente (si se tocó, que esté completa)
    // - Al menos una cosa cambió
    return (
      telefonoValido &&
      seccionPassValida &&
      (huboCambioFoto || huboCambioTelf || huboCambioPass)
    );
  }

  async guardarCambios() {
    if (!this.hayCambios()) return;

    // 1. Validar Contraseña si se intentó cambiar
    if (
      this.nuevaPassword.trim().length >= 6 ||
      this.passwordActual.length > 0
    ) {
      const exitoPass = this.cuentaService.actualizarPasswordConVerificacion(
        this.passwordActual,
        this.nuevaPassword.trim(),
      );

      if (!exitoPass) {
        // TOAST ROJO
        await this.mostrarMensaje(
          'La contraseña actual es incorrecta',
          'danger',
        );
        return; // Detiene el proceso
      }
    }

    // 2. Guardar Teléfono y Foto
    if (this.usuario.telefono !== this.usuarioOriginal.telefono) {
      this.cuentaService.actualizarTelefono(this.usuario.telefono);
    }
    if (this.usuario.foto !== this.usuarioOriginal.foto) {
      this.cuentaService.actualizarFoto(this.usuario.foto);
    }

    // 3. TOAST VERDE DE ÉXITO
    await this.mostrarMensaje('Datos actualizados correctamente', 'success');

    // Resetear y volver
    this.usuarioOriginal = { ...this.usuario };
    this.passwordActual = '';
    this.nuevaPassword = '';

    // Esperamos un poco para que alcancen a ver el toast verde antes de salir
    setTimeout(() => {
      this.navCtrl.navigateBack('/principal-usuariof');
    }, 1500);
  }

  salir() {
    this.navCtrl.navigateBack('/principal-usuariof');
  }
}
