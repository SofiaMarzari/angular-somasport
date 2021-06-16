import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputCantidadProductoComponent } from './input-cantidad-producto.component';

describe('InputCantidadProductoComponent', () => {
  let component: InputCantidadProductoComponent;
  let fixture: ComponentFixture<InputCantidadProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputCantidadProductoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputCantidadProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
