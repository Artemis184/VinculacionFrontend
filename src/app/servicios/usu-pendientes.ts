import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export type EstadoPeticion = 'PENDIENTE' | 'APROBADO' | 'RECHAZADO';

export interface Alarma {
  id: number;
  nombre: string;
}

export interface UsuarioPendiente {
  id: number;
  nombre: string;
  telefono: string;
  correo: string;
  direccion: string;
  referencia: string;
  edad: number;
  estado: EstadoPeticion;
  alarmasSeleccionadas?: number[];
}

@Injectable({
  providedIn: 'root',
})
export class UsuPendientes {
  private alarmas: Alarma[] = [
    { id: 1, nombre: 'Alarma Perimetral' },
    { id: 2, nombre: 'Botón de Pánico' },
    { id: 3, nombre: 'Sensor de Movimiento' },
    { id: 4, nombre: 'Cámara CCTV' },
  ];

  private usuarios: UsuarioPendiente[] = [
    {
      id: 1,
      nombre: 'Juan Pérez',
      telefono: '0928358183',
      correo: 'juan@correo.com',
      direccion: 'Salinas - Ecuador',
      referencia: 'Frente al Tuti',
      edad: 25,
      estado: 'PENDIENTE',
      alarmasSeleccionadas: [],
    },
    {
      id: 2,
      nombre: 'María Gómez',
      telefono: '0992233445',
      correo: 'maria@correo.com',
      direccion: 'La Libertad',
      referencia: 'Cerca del parque',
      edad: 29,
      estado: 'PENDIENTE',
      alarmasSeleccionadas: [],
    },
    {
      id: 3,
      nombre: 'Carlos Ruiz',
      telefono: '0988877665',
      correo: 'carlos@correo.com',
      direccion: 'Santa Elena',
      referencia: 'Diagonal al colegio',
      edad: 32,
      estado: 'PENDIENTE',
      alarmasSeleccionadas: [],
    },
  ];

  getUsuarios(): Observable<UsuarioPendiente[]> {
    return of(this.usuarios);
  }

  getUsuarioById(id: number): Observable<UsuarioPendiente | undefined> {
    return of(this.usuarios.find((u) => u.id === id));
  }

  getAlarmas(): Observable<Alarma[]> {
    return of(this.alarmas);
  }

  guardarCambios(usuarioActualizado: UsuarioPendiente): Observable<boolean> {
    const index = this.usuarios.findIndex(
      (u) => u.id === usuarioActualizado.id,
    );
    if (index !== -1) {
      this.usuarios[index] = usuarioActualizado;
      return of(true);
    }
    return of(false);
  }
}
