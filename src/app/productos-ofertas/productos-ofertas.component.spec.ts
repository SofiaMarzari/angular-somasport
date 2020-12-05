import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosOfertasComponent } from './productos-ofertas.component';

describe('ProductosOfertasComponent', () => {
  let component: ProductosOfertasComponent;
  let fixture: ComponentFixture<ProductosOfertasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductosOfertasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductosOfertasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
