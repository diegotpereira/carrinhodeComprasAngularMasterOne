import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './services/auth/auth.guard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {CoreModule} from './core/core.module';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ProdutoData } from './produtos/produto-data';
import { ExibirCarrinhoModule } from './exibir-carrinho/exibir-carrinho.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    InMemoryWebApiModule.forRoot(ProdutoData, { delay: 700 }),
    HttpClientModule,
    CoreModule,
    ExibirCarrinhoModule,
    AppRoutingModule,
    MatProgressSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
