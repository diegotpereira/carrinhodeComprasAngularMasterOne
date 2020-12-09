import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Produto } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-produtos-detalhe',
  templateUrl: './produtos-detalhe.component.html',
  styleUrls: ['./produtos-detalhe.component.scss']
})
export class ProdutosDetalheComponent implements OnInit {
  produto: Produto;

  constructor(private route: ActivatedRoute,
              private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

}
