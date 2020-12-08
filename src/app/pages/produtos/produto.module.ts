import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutosListaComponent } from './produtos-lista/produtos-lista.component';
import {ProdutosDetalheComponent} from './produtos-detalhe/produtos-detalhe.component';
import {ProdutoRoutingModule} from './produto-routing.module';
import {SharedModule} from '../../shared/shared.module';


@NgModule({
  declarations: [ProdutosListaComponent, ProdutosDetalheComponent],
  imports: [
    CommonModule,
    SharedModule,
    ProdutoRoutingModule
    
  ]
})
export class ProdutosModule { }
