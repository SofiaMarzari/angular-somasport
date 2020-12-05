import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginSesionComponent } from './login-sesion.component';

describe('LoginSesionComponent', () => {
  let component: LoginSesionComponent;
  let fixture: ComponentFixture<LoginSesionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginSesionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginSesionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
