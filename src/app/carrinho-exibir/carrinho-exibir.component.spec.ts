import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrinhoExibirComponent } from './carrinho-exibir.component';

describe('CarrinhoExibirComponent', () => {
  let component: CarrinhoExibirComponent;
  let fixture: ComponentFixture<CarrinhoExibirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarrinhoExibirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrinhoExibirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
