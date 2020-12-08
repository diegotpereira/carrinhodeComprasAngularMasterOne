import { Component, OnInit } from '@angular/core';
import {Produto} from '../../../shared/interfaces';


@Component({
  selector: 'app-produtos-lista',
  templateUrl: './produtos-lista.component.html',
  styleUrls: ['./produtos-lista.component.scss']
})
export class ProdutosListaComponent implements OnInit {

  produtos: Produto[];

  constructor() { }

  ngOnInit(): void {
  }

}
