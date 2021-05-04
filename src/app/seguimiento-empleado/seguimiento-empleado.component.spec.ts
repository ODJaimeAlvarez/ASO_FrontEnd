import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeguimientoEmpleadoComponent } from './seguimiento-empleado.component';

describe('SeguimientoEmpleadoComponent', () => {
  let component: SeguimientoEmpleadoComponent;
  let fixture: ComponentFixture<SeguimientoEmpleadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeguimientoEmpleadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeguimientoEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
