import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProdutosListaComponent } from './produtos-lista/produtos-lista.component';
import {ProdutosDetalheComponent} from './produtos-detalhe/produtos-detalhe.component';
import { ProdutoDetalheResolved } from './produtos-detalhe/produto-detalhe-resolver.service';

const routes: Routes = [
    {
      path: '',
      component: ProdutosListaComponent
    },
    {
      path: ':id',
      component: ProdutosDetalheComponent,
      resolve: { resolvedData: ProdutoDetalheResolved } }
    
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class ProdutoRoutingModule { }
  