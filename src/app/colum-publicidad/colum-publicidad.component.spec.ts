import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumPublicidadComponent } from './colum-publicidad.component';

describe('ColumPublicidadComponent', () => {
  let component: ColumPublicidadComponent;
  let fixture: ComponentFixture<ColumPublicidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColumPublicidadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumPublicidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
