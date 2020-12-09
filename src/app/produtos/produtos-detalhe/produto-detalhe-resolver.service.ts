import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { ProdutoResolved } from '../../shared/interfaces';
import { ProdutoService } from '../produto.service';

@Injectable({
  providedIn: 'root'
})
export class ProdutoDetalheResolved implements Resolve<ProdutoResolved> {

  constructor(private produtoService: ProdutoService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ProdutoResolved> {
    const id = route.paramMap.get('id');
    if (isNaN(+id)) {
      const message = `O id do produto não é um número: ${id}`;
      console.error(message);
      return of({ produto: null, error: message });
    }
    return this.produtoService.getProdutoById(+id)
      .pipe(
        map(produto => ({ produto })),
        catchError(error => {
          const message = `Error: ${error}`;
          console.log(error);
          return of({ produto: null, error: message });
        })
      );
  }
}
