import { TestBed } from '@angular/core/testing';

import { TablaEmpleadosService } from './tabla-empleados.service';

describe('TablaEmpleadosService', () => {
  let service: TablaEmpleadosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TablaEmpleadosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
