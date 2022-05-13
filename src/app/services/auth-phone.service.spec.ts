import { TestBed } from '@angular/core/testing';

import { AuthPhoneService } from './auth-phone.service';

describe('AuthPhoneService', () => {
  let service: AuthPhoneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthPhoneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
