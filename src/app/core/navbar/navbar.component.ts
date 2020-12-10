import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from '../services/auth.service';
import { CarrinhoComprasService } from '../services/carrinho-compras.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  appName = 'Carrinho de Compras';
  itemsPedido: string;

  constructor(private router: Router,
              private carrinhoComprasService: CarrinhoComprasService,
              public authService: AuthService) { }

  ngOnInit(): void {
    this.carrinhoComprasService.qtdItensChanged$.subscribe(
      qtdItens => this.itemsPedido = qtdItens.toString()
    );
  }
  alternarCarrinho(): void {
    if (!location.pathname.includes('(carrinho : carrinho)')) {
      this.router.navigate([{ outlets: { carrinho: ['carrinho']}}])
          .then(() => console.log ('open carrinho'))
    }else{
      this.router.navigate([{ outlets: {carrinho: null}}])
          .then(() => console.log('close carrinho'));
    }
  }

  signOut(): void {
    this.authService.nomeUsuario = undefined;
    this.carrinhoComprasService.limparCarrinho();
    this.router.navigate(['/']);
  }

}
