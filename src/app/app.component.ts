import { Component, OnInit, inject } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { NgIf } from '@angular/common';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';

import { AdminSideMenuComponent } from './paginas/principal-administrador/components/admin-side-menu-component/admin-side-menu-component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [
    NgIf,
    IonApp,
    IonRouterOutlet,

    // Admin-only menu
    AdminSideMenuComponent,
  ],
})
export class AppComponent implements OnInit {
  isAdmin = false;
  solicitudesCount = 4;
  private router = inject(Router);

  ngOnInit() {
    // 1) Si hay rol almacenado, úsalo
    const role = localStorage.getItem('role');
    this.isAdmin = role === 'ADMIN';

    // 2) Además, habilita el menú cuando la URL sea de vistas admin
    const setByUrl = (url: string) => {
      const adminPrefixes = [
        '/principal-administrador',
        '/listado-pendientes-acciones',
        '/listado-usuarios',
        '/lista-alarmas',
        '/admin-auditoria',
      ];
      if (adminPrefixes.some((p) => url.startsWith(p))) {
        this.isAdmin = true;
      }
    };

    // Inicial según URL actual
    setByUrl(this.router.url);

    // Escucha cambios de navegación
    this.router.events.subscribe((ev) => {
      if (ev instanceof NavigationEnd) {
        setByUrl(ev.urlAfterRedirects || ev.url);
      }
    });
  }
}
