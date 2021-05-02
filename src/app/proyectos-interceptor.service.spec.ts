import { TestBed } from '@angular/core/testing';

import { ProyectosInterceptorService } from './proyectos-interceptor.service';

describe('ProyectosInterceptorService', () => {
  let service: ProyectosInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProyectosInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
