import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Produto, ProdutoResolved } from 'src/app/shared/interfaces';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-produtos-detalhe',
  templateUrl: './produtos-detalhe.component.html',
  styleUrls: ['./produtos-detalhe.component.scss']
})
export class ProdutosDetalheComponent implements OnInit {
  produto: Produto;
  errorMessage: string;
  pageTitle: string;
  precoTotal: number;
  qtdProduto: FormControl;


  constructor(private route: ActivatedRoute,
              private snackBar: MatSnackBar) {
                this.qtdProduto = new FormControl('1', [Validators.required, Validators.min(1)]);
               }

  ngOnInit(): void {
    const resolvedData: ProdutoResolved = this.route.snapshot.data.resolvedData;
    this.errorMessage = resolvedData.error;
    this.onProdutoRetrieved(resolvedData.produto);
  }
  onProdutoRetrieved(produto: Produto): void {
    this.produto = produto;
    this.pageTitle = this.produto
      ? `Detalhes do produto: ${this.produto.produtoNome}`
      : 'Produto não encontrado';
    this.precoTotal = this.produto.preco;
    this.qtdProduto.valueChanges.subscribe(
      value => this.calcTotalPreco(+value)
    );
  }
  calcTotalPreco(quantidade: number) {
    if (quantidade < 1 || quantidade === null) {
      this.precoTotal = this.produto.preco;
    } else {
      this.precoTotal = this.produto.preco * quantidade;
    }
  }
  adicionarProduto(): void {
    if (this.qtdProduto.valid) {
      this.snackBarAddProduct();
      // this.cartShoppingService.addItem(this.produto, +this.qtdProduto.value);
    } else {
      this.qtdProduto.markAllAsTouched();
    }
  }
  snackBarAddProduct(): void {
    this.snackBar.open('Agregado al carrito!!', 'OK', {
      duration: 2500,
    });
  }

}
