import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ComprasDetalhesComponent } from './compras-detalhes.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [ComprasDetalhesComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: ComprasDetalhesComponent
      }
    ])
  ]
})
export class ComprasDetalhesModule { }
