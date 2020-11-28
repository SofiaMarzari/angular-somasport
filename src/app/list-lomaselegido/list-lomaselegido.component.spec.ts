import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLomaselegidoComponent } from './list-lomaselegido.component';

describe('ListLomaselegidoComponent', () => {
  let component: ListLomaselegidoComponent;
  let fixture: ComponentFixture<ListLomaselegidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListLomaselegidoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLomaselegidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
