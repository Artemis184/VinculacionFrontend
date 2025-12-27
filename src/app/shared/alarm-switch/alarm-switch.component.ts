import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonCard, IonCardContent } from '@ionic/angular/standalone';

export interface AlarmaUI {
  id: number;
  nombre: string;
  direccion: string;
  encendida: boolean;
  loading: boolean;
}

@Component({
  standalone: true,
  selector: 'app-alarm-switch',
  templateUrl: './alarm-switch.component.html',
  styleUrls: ['./alarm-switch.component.scss'],
  imports: [CommonModule, IonCard, IonCardContent],
})
export class AlarmSwitchComponent {
  /** Lista de alarmas */
  @Input() alarmas: AlarmaUI[] = [];

  /** Evento cuando se quiere cambiar estado */
  @Output() alarmToggle = new EventEmitter<AlarmaUI>();

  onToggle(alarma: AlarmaUI) {
    if (alarma.loading) return;
    this.alarmToggle.emit(alarma);
  }
}
