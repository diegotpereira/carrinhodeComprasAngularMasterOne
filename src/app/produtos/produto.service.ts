import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Produto } from '../shared/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  private produtosUrl = 'api/produtos';

  constructor(private http: HttpClient) { }

  private static handleError(err: any) {
    console.error(err);

    if (err.error instanceof ErrorEvent) {
      // A client side or network error occurred
      return throwError(`ocorreu um erro ${err.error.message}`);
    }
    // The backend returned an unsuccessful response code
    return throwError(`O serviço da web retorna o código ${err.status}: ${err.body.error}`);
  }

  getProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.produtosUrl)
      .pipe(
        catchError(ProdutoService.handleError)
      );
  }

  getProdutoById(id: number): Observable<Produto> {
    return this.http.get<Produto>(`${this.produtosUrl}/${id}`)
      .pipe(
        catchError(ProdutoService.handleError)
      );
  }
}
