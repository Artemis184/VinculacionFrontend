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
  // Array de usuarios (simulado)
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

  // Obtener datos del usuario final
  getUsuario(): UsuarioFinal {
    return this.usuarios[0]; // usuario final logueado
  }

  // Actualizar SOLO teléfono
  actualizarTelefono(telefono: string) {
    this.usuarios[0].telefono = telefono;
  }

  // Actualizar foto de perfil
  actualizarFoto(foto: string) {
    this.usuarios[0].foto = foto;
  }

  // Actualizar contraseña
  actualizarPassword(password: string) {
    this.usuarios[0].password = password;
  }
}
