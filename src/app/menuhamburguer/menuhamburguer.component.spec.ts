import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuhamburguerComponent } from './menuhamburguer.component';

describe('MenuhamburguerComponent', () => {
  let component: MenuhamburguerComponent;
  let fixture: ComponentFixture<MenuhamburguerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuhamburguerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuhamburguerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
