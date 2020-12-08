import { NgModule } from '@angular/core';
import {NavbarComponent} from './navbar/navbar.component';
import {SharedModule} from '../shared/shared.module';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [NavbarComponent],
  imports: [
    SharedModule,
    RouterModule
  ],
  exports: [NavbarComponent]
})
export class CoreModule { }
