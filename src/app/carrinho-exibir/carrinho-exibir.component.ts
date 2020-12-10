import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrinho-exibir',
  templateUrl: './carrinho-exibir.component.html',
  styleUrls: ['./carrinho-exibir.component.scss']
})
export class CarrinhoExibirComponent implements OnInit, OnDestroy {

  pedido: PedidoItem[];
  sub: Subscription;
  totalPedido: number;

  constructor(private carrinhoComprasService: carrinhoService,
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
    this.router.navigate([{ outlets: {primary: ['carrinho-detalhes'], carrinho: null}}])
  }
  irParaCompra(): void {
    this.router.navigate([{ outlets: { primary: ['compra-detalhes'], carrinho: null}}])
  }

}
