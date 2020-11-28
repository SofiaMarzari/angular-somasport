import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaleriaInfoComponent } from './galeria-info.component';

describe('GaleriaInfoComponent', () => {
  let component: GaleriaInfoComponent;
  let fixture: ComponentFixture<GaleriaInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GaleriaInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GaleriaInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
