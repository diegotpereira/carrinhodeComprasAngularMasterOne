import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { itensPedido, Produto } from '../shared/interfaces';
import { CarrinhoComprasService } from '../core/services/carrinho-compras.service';

@Component({
  selector: 'app-carrinho-detalhes',
  templateUrl: './carrinho-detalhes.component.html',
  styleUrls: ['./carrinho-detalhes.component.scss']
})
export class CarrinhoDetalhesComponent implements OnInit, OnDestroy {

  pedido: itensPedido[];
  sub: Subscription;
  totalPedido: number;
  errorsEntrada: any = {}
  errorMessage: string;

  constructor(private carrinhoComprasService: CarrinhoComprasService,
              private router: Router) { }

  ngOnInit(): void {
    this.sub = this.carrinhoComprasService.pedidoChanged$.subscribe(
      pedido => {
        this.pedido = pedido;
        this.totalPedido = this.calPedidoPreco();
      }
    );
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
  calPedidoPreco(): number {
    return this.pedido.map(item => item.precoTotal)
      .reduce ((a,b) => a + b, 0 );
  }
  qtdChanged(event: any, produto: Produto): void {
    const key = event.id.toString();
    this.errorsEntrada[key] = event.value;
    this.carrinhoComprasService.fecharPedido(+event.value, produto);
  }
  deleteItem(id: number) {
    this.carrinhoComprasService.deleteItem(id);
    this.totalPedido = this.calPedidoPreco();
  }
  irParaCompra(): void {
    for (const key in this.errorsEntrada) {
      if (this.errorsEntrada[key] === null || this.errorsEntrada[key] < 1) {
        this.errorMessage = 'Quantidades de produto válidas';
        return;
      }
    }
    this.errorMessage = null;
    this.router.navigate(['/compra-detalhes']);
  }

}
