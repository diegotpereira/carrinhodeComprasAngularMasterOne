import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import {Subscription} from 'rxjs';
import {debounceTime} from 'rxjs/operators';

@Component({
  selector: 'app-entrada-qtd',
  templateUrl: './entrada-qtd.component.html',
  styleUrls: ['./entrada-qtd.component.scss']
})
export class EntradaQtdComponent implements OnInit,OnDestroy {

  @Input() qtd : string;
  @Input() id: number;
  @Output() qtdChanged = new EventEmitter<any>();
   
  qtdCtrl: FormControl;
  entradaSub: Subscription;

  constructor() { }


  ngOnInit(): void {
    this.qtdCtrl = new FormControl(this.qtd, [Validators.required, Validators.min(1)]);
    this.entradaSub = this.qtdCtrl.valueChanges
    .pipe(
      debounceTime(100)
    )
    .subscribe(
      value => {
        if (value===null || value < 1) {
          this.qtdCtrl.markAllAsTouched();
          
        }
        this.qtdChanged.emit({id: this.id, value})
      }
    );
  }
  ngOnDestroy(): void {
    throw new Error('Método não implementado.');
  }

}
