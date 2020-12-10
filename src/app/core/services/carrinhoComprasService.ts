import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';
import { itensPedido, Produto } from '../../shared/interfaces';

@Injectable({
    providedIn: 'root'
  })

  export class CarrinhoComprasService {

    pedido: itensPedido[] = [];
    qtdItens = 0 ;

    private orderBehaviorSubject$ = new BehaviorSubject<itensPedido[]>(this.order);
    orderChanged$ = this.orderBehaviorSubject$.asObservable();

    private qtdItensSubject$ = new Subject<number>();
    qtdItensChanged$ = this.qtdItensSubject$.asObservable();

    adicionarItem(produto: Produto, qtd: number): void {
        const index = this.pedido.findIndex(item => item.produto.produtoNome === produto.produtoNome);
        if (index === -1) {
          const newOrderItem: itensPedido = {
            produto,
            qtd,
            precoTotal: produto.preco * qtd
          };
          this.pedido = [...this.pedido, newOrderItem];
          this.orderBehaviorSubject$.next(this.pedido);
        } else {
          this.pedido[index].qtd += qtd;
          this.pedido[index].precoTotal += produto.preco * qtd;
          this.orderBehaviorSubject$.next(this.pedido);
        }
        this.qtdItens += qtd;
        this.qtdItensSubject$.next(this.qtdItens);
  }
  fecharPedido(qtd: number, produto: Produto): void {
    if (isNaN(qtd) || qtd < 1) {
      return;
    }
    const index = this.pedido.findIndex(item => item.produto.id === produto.id);

    const oldQuantity = this.pedido[index].qtd;

    this.pedido[index].qtd = qtd;
    this.pedido[index].precoTotal = produto.preco * qtd;
    this.orderBehaviorSubject$.next(this.pedido);

    this.qtdItens += qtd - oldQuantity;
    this.qtdItensSubject$.next(this.qtdItens);
  }
  deleteItem(produtoId: number): void {
    const index = this.pedido.findIndex(item => item.produto.id === produtoId);
    const qtd = this.pedido[index].qtd;

    this.pedido.splice(index, 1);
    this.qtdItensSubject$.next(this.qtdItens);

    this.qtdItens -=  qtd;
    this.qtdItensSubject$.next(this.qtdItens);
  }
  limparCarrinho(): void {
    this.pedido = [];
    this.orderBehaviorSubject$.next(this.pedido);

    this.qtdItens = 0;
    this.qtdItensSubject$.next(this.qtdItens);
  }
}