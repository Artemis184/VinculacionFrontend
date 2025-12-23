import { Injectable } from '@angular/core';

export interface UsuarioFinal {
  id: number;
  nombre: string;
  email: string;
  telefono: string;
  foto: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class CuentaUsuariF {
  private usuarios: UsuarioFinal[] = [
    {
      id: 1,
      nombre: 'Juan Pérez',
      email: 'juan@email.com',
      telefono: '0999999999',
      foto: 'https://i.pravatar.cc/300?img=1',
      password: '123456',
    },
  ];

  private getUsuarioActivo(): UsuarioFinal | null {
    return this.usuarios.length > 0 ? this.usuarios[0] : null;
  }

  getUsuario(): UsuarioFinal {
    const usuario = this.getUsuarioActivo();
    if (!usuario) {
      throw new Error('No existe usuario activo');
    }
    return usuario;
  }

  actualizarTelefono(telefono: string): boolean {
    const usuario = this.getUsuarioActivo();
    if (!usuario) return false;
    usuario.telefono = telefono;
    return true;
  }

  actualizarFoto(foto: string): boolean {
    const usuario = this.getUsuarioActivo();
    if (!usuario) return false;
    usuario.foto = foto;
    return true;
  }

  // --- NUEVA FUNCIÓN SOLICITADA ---
  actualizarPasswordConVerificacion(
    passwordActual: string,
    passwordNueva: string,
  ): boolean {
    const usuario = this.getUsuarioActivo();
    if (!usuario) return false;

    if (usuario.password === passwordActual) {
      usuario.password = passwordNueva;
      return true;
    }
    return false;
  }

  /** Método anterior (opcional mantenerlo) */
  actualizarPassword(password: string): boolean {
    const usuario = this.getUsuarioActivo();
    if (!usuario) return false;
    usuario.password = password;
    return true;
  }
}
