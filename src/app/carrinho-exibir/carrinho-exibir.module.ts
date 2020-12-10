import { NgModule } from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import {CarrinhoExibirComponent} from './carrinho-exibir.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
    declarations: [CarrinhoExibirComponent],
    imports: [
        MatCardModule,
        SharedModule,
        RouterModule.forChild([{
            path: 'exibir',
            component: CarrinhoExibirComponent,
            outlet: 'carrinho'
        }
            
        ]),
    ]
})
export class CarrinhoExibirModule{}