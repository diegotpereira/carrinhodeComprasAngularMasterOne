import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntradaQtdComponent } from './entrada-qtd.component';

describe('EntradaQtdComponent', () => {
  let component: EntradaQtdComponent;
  let fixture: ComponentFixture<EntradaQtdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntradaQtdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntradaQtdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
