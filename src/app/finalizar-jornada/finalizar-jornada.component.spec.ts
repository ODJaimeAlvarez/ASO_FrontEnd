import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalizarJornadaComponent } from './finalizar-jornada.component';

describe('FinalizarJornadaComponent', () => {
  let component: FinalizarJornadaComponent;
  let fixture: ComponentFixture<FinalizarJornadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinalizarJornadaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalizarJornadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
