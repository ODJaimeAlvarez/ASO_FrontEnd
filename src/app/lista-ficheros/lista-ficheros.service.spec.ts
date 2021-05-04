import { TestBed } from '@angular/core/testing';

import { ListaFicherosService } from './lista-ficheros.service';

describe('ListaFicherosService', () => {
  let service: ListaFicherosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaFicherosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
