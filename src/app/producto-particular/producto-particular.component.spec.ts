import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoParticularComponent } from './producto-particular.component';

describe('ProductoParticularComponent', () => {
  let component: ProductoParticularComponent;
  let fixture: ComponentFixture<ProductoParticularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductoParticularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoParticularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
