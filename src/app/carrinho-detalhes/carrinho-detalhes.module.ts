import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { CarrinhoDetalhesComponent } from './carrinho-detalhes.component';
import { EntradaQtdComponent } from './entrada-qtd/entrada-qtd.component';
// import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [CarrinhoDetalhesComponent, EntradaQtdComponent],
  imports: [
    // MatCardModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: CarrinhoDetalhesComponent
      }
    ])
  ]
})
export class CarrinhoDetalhesModule { }
