import { Component, OnInit, inject } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonButton,
  IonIcon,
  IonItem,
  IonLabel,
  IonSelect,
  IonSelectOption,
  IonCheckbox,
  IonList,
  IonModal,
  IonTitle,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { personCircleOutline, saveOutline, closeOutline } from 'ionicons/icons';
import {
  UsuPendientes,
  UsuarioPendiente,
  Alarma,
  EstadoPeticion,
} from '../../servicios/usu-pendientes';

@Component({
  selector: 'app-listado-usu',
  templateUrl: './listado-usu.page.html',
  styleUrls: ['./listado-usu.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonContent,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonBackButton,
    IonButton,
    IonIcon,
    IonItem,
    IonLabel,
    IonSelect,
    IonSelectOption,
    IonCheckbox,
    IonList,
    IonModal,
    IonTitle,
  ],
})
export class ListadoUsuPage implements OnInit {
  // Inyección usando inject()
  private route = inject(ActivatedRoute);
  private location = inject(Location);
  private router = inject(Router);
  private servicio = inject(UsuPendientes);

  usuario!: UsuarioPendiente;
  alarmas: Alarma[] = [];
  estadoSeleccionado: EstadoPeticion = 'PENDIENTE';
  modalConfirmacion = false;

  constructor() {
    addIcons({
      'person-circle-outline': personCircleOutline,
      'save-outline': saveOutline,
      'close-outline': closeOutline,
    });
  }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.servicio.getUsuarioById(id).subscribe((u) => {
      if (u) {
        this.usuario = { ...u };
        this.estadoSeleccionado = u.estado;
      }
    });

    this.servicio.getAlarmas().subscribe((a) => {
      this.alarmas = a;
    });
  }

  toggleAlarma(id: number) {
    if (!this.usuario.alarmasSeleccionadas) {
      this.usuario.alarmasSeleccionadas = [];
    }
    const index = this.usuario.alarmasSeleccionadas.indexOf(id);
    if (index >= 0) {
      this.usuario.alarmasSeleccionadas.splice(index, 1);
    } else {
      this.usuario.alarmasSeleccionadas.push(id);
    }
  }

  abrirConfirmacion() {
    this.modalConfirmacion = true;
  }

  cerrarConfirmacion() {
    this.modalConfirmacion = false;
  }

  guardar() {
    this.usuario.estado = this.estadoSeleccionado;
    this.servicio.guardarCambios(this.usuario).subscribe(() => {
      this.modalConfirmacion = false;
      this.router.navigate(['/listado-pendientes-acciones']);
    });
  }

  cancelar() {
    this.location.back();
  }

  nombreAlarma(id: number): string {
    return this.alarmas.find((a) => a.id === id)?.nombre || '';
  }
}
