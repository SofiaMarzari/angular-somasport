import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedesContactoComponent } from './redes-contacto.component';

describe('RedesContactoComponent', () => {
  let component: RedesContactoComponent;
  let fixture: ComponentFixture<RedesContactoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedesContactoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RedesContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
