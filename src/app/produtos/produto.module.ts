import { NgModule } from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import { ProdutoRoutingModule } from './produto-routing.module';
import { ProdutosDetalheComponent } from './produtos-detalhe/produtos-detalhe.component';
import { ProdutosListaComponent } from './produtos-lista/produtos-lista.component';

@NgModule({
    declarations: [ProdutosListaComponent, ProdutosDetalheComponent],
    imports: [
      SharedModule,
      ProdutoRoutingModule
    ]
  })
  export class ProdutoModule { }