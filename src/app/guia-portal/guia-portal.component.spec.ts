import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuiaPortalComponent } from './guia-portal.component';

describe('GuiaPortalComponent', () => {
  let component: GuiaPortalComponent;
  let fixture: ComponentFixture<GuiaPortalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuiaPortalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuiaPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
