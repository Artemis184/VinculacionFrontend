import { provideZoneChangeDetection } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import {
  RouteReuseStrategy,
  provideRouter,
  withPreloading,
  PreloadAllModules,
} from '@angular/router';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';

import {
  IonicRouteStrategy,
  provideIonicAngular,
} from '@ionic/angular/standalone';

//SE AGREGO
import { addIcons } from 'ionicons';
import { personCircle, menuOutline } from 'ionicons/icons';

// ✅ REGISTRA ICONOS (para que <ion-icon name="..."> se vea)
addIcons({
  'person-circle': personCircle,
  'menu-outline': menuOutline,
});


bootstrapApplication(AppComponent, {
  providers: [
    provideZoneChangeDetection(),
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)),
  ],
});
