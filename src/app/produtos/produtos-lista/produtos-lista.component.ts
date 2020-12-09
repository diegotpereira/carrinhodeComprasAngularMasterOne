import { Component, OnInit } from '@angular/core';
import { Produto } from '../../shared/interfaces';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-produtos-lista',
  templateUrl: './produtos-lista.component.html',
  styleUrls: ['./produtos-lista.component.scss']
})
export class ProdutosListaComponent implements OnInit {

  produtos: Produto[];
  searchCtrl: FormControl;
  filteredProducts: Produto[];

  constructor(private snackBar: MatSnackBar) {

    this.searchCtrl = new FormControl('');
  }

  ngOnInit(): void {

    produtos => {
      this.produtos = produtos;
      this.filteredProducts = this.performFilter(this.searchCtrl.value);
    }
  }
  performFilter(filterBy: string): Produto[] {
    filterBy = this.sanitizeSearch(filterBy);
    return this.produtos.filter((produto: Produto) =>
      this.sanitizeSearch(produto.produtoNome).indexOf(filterBy) !== -1);
  }
  sanitizeSearch(text: string): string {
    return text.toLocaleLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
  }
  snackBarAddProduct(): void {
    this.snackBar.open('Produto adicionado!!', 'OK', {
      duration: 2500,
    });
  }

}
