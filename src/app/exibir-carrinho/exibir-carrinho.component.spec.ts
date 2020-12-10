import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExibirCarrinhoComponent } from './exibir-carrinho.component';

describe('ExibirCarrinhoComponent', () => {
  let component: ExibirCarrinhoComponent;
  let fixture: ComponentFixture<ExibirCarrinhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExibirCarrinhoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExibirCarrinhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
