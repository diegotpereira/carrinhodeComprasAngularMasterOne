import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  appName = 'Carrinho de Compras';
  itemsOrder: string;

  constructor(private router: Router,
              public authService: AuthService) { }

  ngOnInit(): void {
  }
  toggleCart(): void {}

  signOut(): void {
    this.authService.nomeUsuario = undefined;
    // this.cartShoppingService.clearCart();
    this.router.navigate(['/']);
  }

}
