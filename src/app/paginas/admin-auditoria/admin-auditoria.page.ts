import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonMenuButton,
  IonButton,
  IonIcon,
  IonList,
  IonFab,
  IonFabButton,
  IonFabList,
  IonModal,
  IonDatetime,
  IonRadioGroup,
  IonItem,
  IonLabel,
  IonRadio,
  IonText,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  personCircle,
  close,
  calendarOutline,
  listOutline,
  funnelOutline,
  chevronForwardOutline,
  menuOutline,
  add,
} from 'ionicons/icons';

@Component({
  standalone: true,
  selector: 'app-admin-auditoria',
  templateUrl: './admin-auditoria.page.html',
  styleUrls: ['./admin-auditoria.page.scss'],
  imports: [
    CommonModule,
    FormsModule,
    IonContent,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonMenuButton,
    IonButton,
    IonIcon,
    IonList,
    IonFab,
    IonFabButton,
    IonFabList,
    IonModal,
    IonDatetime,
    IonRadioGroup,
    IonItem,
    IonLabel,
    IonRadio,
    IonText,
  ],
})
export class AdminAuditoriaPage implements OnInit {
  modalFechasOpen = false;
  modalAlarmaOpen = false;

  fechaInicioISO: string | null = null;
  fechaFinISO: string | null = null;
  alarmaSeleccionadaId: number | null = null;

  alarmasCatalogo = [
    { id: 1, nombre: 'ALARMA # 001', direccion: 'DIRECCION CORTA A' },
    { id: 2, nombre: 'ALARMA # 002', direccion: 'DIRECCION CORTA B' },
    { id: 3, nombre: 'ALARMA # 003', direccion: 'DIRECCION CORTA C' },
  ];

  auditoriaAll = [
    {
      alarmaId: 1,
      estado: 'ACTIVADA',
      usuario: 'Admin Principal',
      fechaISO: '2025-08-17T10:00:00Z',
    },
    {
      alarmaId: 2,
      estado: 'DESACTIVADO',
      usuario: 'Usuario 01',
      fechaISO: '2025-08-17T11:30:00Z',
    },
    {
      alarmaId: 1,
      estado: 'ACTIVADA',
      usuario: 'Admin Principal',
      fechaISO: '2025-08-18T09:15:00Z',
    },
    {
      alarmaId: 3,
      estado: 'ACTIVADA',
      usuario: 'Operador 05',
      fechaISO: '2025-08-19T14:20:00Z',
    },
    {
      alarmaId: 2,
      estado: 'DESACTIVADO',
      usuario: 'Usuario 01',
      fechaISO: '2025-08-20T18:00:00Z',
    },
  ];

  auditoriaFiltrada: any[] = [];

  constructor() {
    addIcons({
      personCircle,
      close,
      calendarOutline,
      listOutline,
      funnelOutline,
      chevronForwardOutline,
      menuOutline,
      add,
    });
  }

  ngOnInit() {
    this.aplicarFiltros();
  }

  aplicarFiltros() {
    let resultado = [...this.auditoriaAll];

    if (this.fechaInicioISO || this.fechaFinISO) {
      resultado = resultado.filter((item) => {
        const fechaItem = new Date(item.fechaISO).getTime();

        if (this.fechaInicioISO) {
          const inicio = new Date(this.fechaInicioISO);
          inicio.setHours(0, 0, 0, 0);
          if (fechaItem < inicio.getTime()) return false;
        }

        if (this.fechaFinISO) {
          const fin = new Date(this.fechaFinISO);
          fin.setHours(23, 59, 59, 999);
          if (fechaItem > fin.getTime()) return false;
        }
        return true;
      });
    }

    // Filtrado por Alarma
    if (this.alarmaSeleccionadaId !== null) {
      resultado = resultado.filter(
        (item) => item.alarmaId === this.alarmaSeleccionadaId,
      );
    }

    this.auditoriaFiltrada = this.enriquecer(resultado);
  }

  limpiarFiltros() {
    this.fechaInicioISO = null;
    this.fechaFinISO = null;
    this.alarmaSeleccionadaId = null;
    this.aplicarFiltros();
  }

  abrirModalFechas() {
    this.modalFechasOpen = true;
  }
  cerrarModalFechas() {
    this.modalFechasOpen = false;
  }

  aplicarFiltroFechas() {
    this.aplicarFiltros();
    this.modalFechasOpen = false;
  }

  abrirModalAlarma() {
    this.modalAlarmaOpen = true;
  }
  cerrarModalAlarma() {
    this.modalAlarmaOpen = false;
  }

  seleccionarAlarma() {
    this.aplicarFiltros();
    this.modalAlarmaOpen = false;
  }

  private enriquecer(items: any[]) {
    return items.map((item) => {
      const alarmaInfo = this.alarmasCatalogo.find(
        (a) => a.id === item.alarmaId,
      );
      return {
        ...item,
        alarmaNombre: alarmaInfo?.nombre ?? `ALARMA #${item.alarmaId}`,
        direccion: alarmaInfo?.direccion ?? 'Dirección no disponible',
        fechaTexto: new Date(item.fechaISO).toLocaleString('es-ES', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
        }),
      };
    });
  }
}
