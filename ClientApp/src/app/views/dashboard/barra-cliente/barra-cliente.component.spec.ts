import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraClienteComponent } from './barra-cliente.component';

describe('BarraClienteComponent', () => {
  let component: BarraClienteComponent;
  let fixture: ComponentFixture<BarraClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarraClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarraClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
