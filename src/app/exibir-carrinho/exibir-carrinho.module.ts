import { NgModule } from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import {ExibirCarrinhoComponent} from './exibir-carrinho.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
    declarations: [ExibirCarrinhoComponent],
    imports: [
        MatCardModule,
        SharedModule,
        RouterModule.forChild([{
            path: 'carrinho',
            component: ExibirCarrinhoComponent,
            outlet: 'exibir'
        }
            
        ]),
    ]
})
export class ExibirCarrinhoModule{}