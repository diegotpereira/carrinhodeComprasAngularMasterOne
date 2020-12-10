import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CarrinhoComprasService } from '../core/services/carrinho-compras.service';
import { itensPedido } from '../shared/interfaces';

@Component({
  selector: 'app-compras-detalhes',
  templateUrl: './compras-detalhes.component.html',
  styleUrls: ['./compras-detalhes.component.scss']
})
export class ComprasDetalhesComponent implements OnInit {

  pedido: itensPedido[];
  precoTotal: number;

  constructor( private carrinhoComprasService: CarrinhoComprasService,
              private snackBar: MatSnackBar,
              private router: Router) { }

  ngOnInit(): void {
    this.carrinhoComprasService.pedidoChanged$.subscribe(
      pedido => {
        this.pedido = pedido;
        this.precoTotal = this.calcPedidoPreco();
      }
    );
  }
  calcPedidoPreco(): number{
    return this.pedido.map(item => item.precoTotal)
       .reduce((a, b) => a + b, 0);
  }
  comfirmar(): void {
    this.snackBar.open('Compra realizada com sucesso!!', 'ok', {
      duration: 2500,
    }).afterOpened().subscribe(
      () => {
        this.carrinhoComprasService.limparCarrinho();
        this.router.navigate(['/']);
      }
    )
  }

}
