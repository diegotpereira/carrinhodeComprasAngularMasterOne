import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { CarrinhoComprasService } from '../core/services/carrinho-compras.service';
import { itensPedido } from '../shared/interfaces';


@Component({
  selector: 'app-exibir-carrinho',
  templateUrl: './exibir-carrinho.component.html',
  styleUrls: ['./exibir-carrinho.component.scss']
})
export class ExibirCarrinhoComponent implements OnInit, OnDestroy {

  pedido: itensPedido[];
  sub: Subscription;
  totalPedido: number;

  constructor(private carrinhoComprasService: CarrinhoComprasService,
              private router: Router) { }

  ngOnInit(): void {
    this.sub = this.carrinhoComprasService.pedidoChanged$.subscribe(

      pedido => {
        this.pedido = pedido;
        this.totalPedido = this.calcPrecoPedido();
      }
    );
  }
  ngOnDestroy():void{
    this.sub.unsubscribe();
  }
  calcPrecoPedido():number{
    return this.pedido.map(item => item.precoTotal)
    .reduce((a,b) => a+b,0);
  }
  irParaCarrinho():void{
    this.router.navigate([{ outlets: {primary: ['carrinho-detalhes'], exibir: null}}])
  }
  irParaCompra(): void {
    this.router.navigate([{ outlets: { primary: ['compras-detalhes'], exibir: null}}])
  }

}
