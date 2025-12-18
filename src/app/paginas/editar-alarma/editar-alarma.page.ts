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
  IonTextarea,
  IonToggle,
  IonButton,
  IonButtons,
  IonBackButton,
  IonImg,
  IonCard,
  IonBadge,
  IonChip,
  IonGrid,
  IonRow,
  IonCol,
  ToastController,
} from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

import { Alarmas, Alarma } from 'src/app/servicios/alarmas';

@Component({
  selector: 'app-editar-alarma',
  templateUrl: './editar-alarma.page.html',
  styleUrls: ['./editar-alarma.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButtons,
    IonBackButton,
    IonCard,
    IonItem,
    IonLabel,
    IonInput,
    IonTextarea,
    IonToggle,
    IonButton,
    IonImg,
    IonBadge,
    IonChip,
    IonGrid,
    IonRow,
    IonCol,
  ],
})
export class EditarAlarmaPage implements OnInit {
  alarma?: Alarma;

  previewImg: string | null = null;
  private imagenOriginal = '';

  guardando = false;

  private route = inject(ActivatedRoute);
  private alarmasService = inject(Alarmas);
  private toastCtrl = inject(ToastController);
  private navCtrl = inject(NavController);

  async ngOnInit() {
    const rawId = this.route.snapshot.paramMap.get('id');
    const id = Number(rawId);

    if (!rawId || Number.isNaN(id)) {
      await this.toast('ID inválido', 'danger');
      this.navCtrl.back();
      return;
    }

    const encontrada = this.alarmasService.getAlarmaById(id);

    if (!encontrada) {
      await this.toast('No existe esa alarma', 'danger');
      this.navCtrl.back();
      return;
    }

    this.alarma = { ...encontrada };
    this.imagenOriginal = encontrada.installation_image;
    this.previewImg = this.imagenOriginal || null;
  }

  colorActiva(): string {
    return this.alarma?.is_active ? 'success' : 'danger';
  }
  textoActiva(): string {
    return this.alarma?.is_active ? 'Activa' : 'Inactiva';
  }
  colorHabilitada(): string {
    return this.alarma?.is_enabled ? 'primary' : 'medium';
  }
  textoHabilitada(): string {
    return this.alarma?.is_enabled ? 'Habilitada' : 'Deshabilitada';
  }

  puedeGuardar(): boolean {
    if (!this.alarma) return false;

    const nameOk = this.alarma.name.trim().length > 0;
    const codeOk = this.alarma.code.trim().length > 0;
    const descOk = (this.alarma.description ?? '').trim().length > 0;
    const locOk = (this.alarma.location ?? '').trim().length > 0;
    const rfOk = (this.alarma.rf_address ?? '').trim().length > 0;

    return nameOk && codeOk && descOk && locOk && rfOk && !this.guardando;
  }

  async onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      await this.toast('Selecciona un archivo de imagen', 'warning');
      return;
    }

    const maxBytes = 2 * 1024 * 1024; // 2MB
    if (file.size > maxBytes) {
      await this.toast('La imagen es muy grande (máx 2MB)', 'warning');
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      this.previewImg = String(reader.result);
    };
    reader.readAsDataURL(file);

    input.value = '';
  }

  cancelar() {
    this.navCtrl.back();
  }

  async guardar() {
    if (!this.alarma) return;

    const name = this.alarma.name.trim();
    const code = this.alarma.code.trim().toUpperCase();
    const description = (this.alarma.description ?? '').trim();
    const location = (this.alarma.location ?? '').trim();
    const rf_address = (this.alarma.rf_address ?? '').trim();

    // validar campos vacíos
    const faltantes: string[] = [];
    if (!name) faltantes.push('Nombre');
    if (!code) faltantes.push('Código');
    if (!description) faltantes.push('Descripción');
    if (!location) faltantes.push('Ubicación');
    if (!rf_address) faltantes.push('RF Address');

    if (faltantes.length > 0) {
      await this.toast(`Completa: ${faltantes.join(', ')}`, 'warning');
      return;
    }

    if (!this.alarma.is_enabled && this.alarma.is_active) {
      await this.toast(
        'Una alarma no puede estar activa si está deshabilitada',
        'warning',
      );
      return;
    }

    this.guardando = true;

    try {
      const ok = this.alarmasService.actualizarAlarma(this.alarma.id, {
        name,
        code,
        description,
        location,
        rf_address,
        is_active: !!this.alarma.is_active,
        is_enabled: !!this.alarma.is_enabled,
        installation_image: this.imagenOriginal, // imagen no se guarda
      });

      await this.toast(
        ok ? 'Alarma guardada correctamente' : 'No se pudo guardar',
        ok ? 'success' : 'danger',
      );

      if (ok) this.navCtrl.back();
    } catch {
      await this.toast('Ocurrió un error al guardar', 'danger');
    } finally {
      this.guardando = false;
    }
  }

  private async toast(
    message: string,
    color: 'success' | 'danger' | 'warning' | 'medium',
  ) {
    const t = await this.toastCtrl.create({
      message,
      duration: 1500,
      position: 'bottom',
      color,
    });
    await t.present();
  }
}
