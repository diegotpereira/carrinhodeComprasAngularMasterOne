import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { Error404Component } from './pages/error404/error404.component';
import { AuthGuard } from './services/auth/auth.guard';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'sobre/:id', component: SobreComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login', component: LoginComponent
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  {
    path: 'produtos',
    loadChildren: () =>
      import('./pages/produtos/produto.module').then(m => m.ProdutosModule)
  },

  
  {
    path: '**', component: Error404Component
  },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
