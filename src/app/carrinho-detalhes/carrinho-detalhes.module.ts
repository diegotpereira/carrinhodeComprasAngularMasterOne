import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { EntradaQtdComponent } from './entrada-qtd/entrada-qtd.component';



@NgModule({
  declarations: [CarrinhoDetalhesComponent, EntradaQtdComponent],
  imports: [
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
