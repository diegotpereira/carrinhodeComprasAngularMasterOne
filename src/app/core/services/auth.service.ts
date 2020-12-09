import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  nomeUsuario?: string;
  redirectUrl: string;

  signIn(nomeUsuario: string, pass: string): void {
    if (nomeUsuario && pass) {
      this.nomeUsuario = nomeUsuario;
    }
  }

  singOut(): void {
    this.nomeUsuario = null;
  }
}
