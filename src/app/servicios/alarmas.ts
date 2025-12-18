import { Injectable } from '@angular/core';
export interface Alarma {
  id: number;
  name: string;
  code: string;
  description: string;
  location: string;
  rf_address: string;
  is_active: boolean;
  is_enabled: boolean;
  installation_image: string;
  created_at: string;
  updated_at: string;
}

@Injectable({
  providedIn: 'root',
})
export class Alarmas {
  private alarmas: Alarma[] = [
    {
      id: 1,
      name: 'ALARMA #1',
      code: 'AL-001',
      description: 'Alarma instalada en zona norte',
      location: 'Calle XYZ',
      rf_address: 'RF-10001',
      is_active: true,
      is_enabled: true,
      installation_image:
        'https://www.dropbox.com/scl/fi/e935xff5qiyhewasywste/alarma-1.avif?rlkey=cejdtudqrry3p490ksd4yoxuy&st=xy309y4w&dl=1',
      created_at: '2025-01-01',
      updated_at: '2025-01-01',
    },
    {
      id: 2,
      name: 'ALARMA #2',
      code: 'AL-002',
      description: 'Alarma zona sur',
      location: 'Av. Principal',
      rf_address: 'RF-10002',
      is_active: false,
      is_enabled: true,
      installation_image:
        'https://www.dropbox.com/scl/fi/lw2g7h0np6k9lr2acexo4/alarma-2.jpeg?rlkey=1nglh3eteq9dd493rcryj3tfa&st=b1gucbmu&dl=1',
      created_at: '2025-01-02',
      updated_at: '2025-01-02',
    },
    {
      id: 3,
      name: 'ALARMA #3',
      code: 'AL-003',
      description: 'Alarma en bodega central',
      location: 'Parque industrial',
      rf_address: 'RF-10003',
      is_active: true,
      is_enabled: false,
      installation_image:
        'https://www.dropbox.com/scl/fi/fj4pc9gyprf1olo4q457p/alarma-3.jpeg?rlkey=bnus5a80grha2gghckjvpqjyd&st=zm0joxlv&dl=1',
      created_at: '2025-01-03',
      updated_at: '2025-01-03',
    },
    {
      id: 4,
      name: 'ALARMA #4',
      code: 'AL-004',
      description: 'Alarma perimetral',
      location: 'Ingreso principal',
      rf_address: 'RF-10004',
      is_active: true,
      is_enabled: true,
      installation_image:
        'https://www.dropbox.com/scl/fi/pzboi35mm4r01ong8uahr/alarma-4.jpg?rlkey=l026k685ud5x7x0266psmy7wa&st=iu88oqqr&dl=1',
      created_at: '2025-01-04',
      updated_at: '2025-01-04',
    },
  ];

  getAlarmas(): Alarma[] {
    return this.alarmas;
  }

  getAlarmaById(id: number): Alarma | undefined {
    return this.alarmas.find((a) => a.id === id);
  }

  actualizarAlarma(id: number, cambios: Partial<Alarma>): boolean {
    const alarma = this.getAlarmaById(id);
    if (!alarma) return false;

    Object.assign(alarma, cambios, {
      updated_at: new Date().toISOString(),
    });

    return true;
  }
}
