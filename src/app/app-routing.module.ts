import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { SobreComponent } from './sobre/sobre.component';
import { Error404Component } from './error404/error404.component';
import { AuthGuard } from './services/auth/auth.guard';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent,
    // canActivate: [AuthGuard]
  },
  {
    path: 'produtos',
    loadChildren: () =>
      import('./produtos/produto.module').then(m => m.ProdutoModule)
  },


  {
    path: 'sobre', component: SobreComponent,
    // canActivate: [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then(m => m.LoginModule)
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },

 


  {
    path: '**', component: Error404Component
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
