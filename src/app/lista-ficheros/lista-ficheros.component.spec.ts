import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaFicherosComponent } from './lista-ficheros.component';

describe('ListaFicherosComponent', () => {
  let component: ListaFicherosComponent;
  let fixture: ComponentFixture<ListaFicherosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaFicherosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaFicherosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
