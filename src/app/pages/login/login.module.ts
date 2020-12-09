import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card/card-module';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';


import { LoginComponent } from './login.component';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    MatCardModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: LoginComponent
      }
    ])
  ]
})
export class LoginModule { }
