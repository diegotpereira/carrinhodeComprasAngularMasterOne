import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProdutosListaComponent } from './produtos-lista/produtos-lista.component';
import {ProdutosDetalheComponent} from './produtos-detalhe/produtos-detalhe.component';

const routes: Routes = [
    {
      path: '',
      component: ProdutosListaComponent
    },
    {
      path: ':id',
      component: ProdutosDetalheComponent }
    
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class ProdutoRoutingModule { }
  