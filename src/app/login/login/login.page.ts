import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonText,
} from '@ionic/angular/standalone';

import { LoginService } from '../../servicios/login.service';

@Component({
  standalone: true,
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  imports: [
    IonContent,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
    IonText,
    FormsModule,
  ],
})
export class LoginPage {
  username = '';
  password = '';
  errorMessage = '';

  // ✅ Inyección con inject()
  private loginService = inject(LoginService);
  private router = inject(Router);

  onLogin() {
    this.errorMessage = '';

    this.loginService
      .login(this.username, this.password)
      .then((role) => {
        if (role === 'admin') {
          this.router.navigate(['/principal-administrador']);
        } else {
          this.router.navigate(['/principal-cliente']);
        }
      })
      .catch((err) => {
        this.errorMessage = err;
      });
  }
}
