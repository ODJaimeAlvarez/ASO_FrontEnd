import { TestBed } from '@angular/core/testing';

import { RolesGuardGuard } from './roles-guard.guard';

describe('RolesGuardGuard', () => {
  let guard: RolesGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RolesGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
