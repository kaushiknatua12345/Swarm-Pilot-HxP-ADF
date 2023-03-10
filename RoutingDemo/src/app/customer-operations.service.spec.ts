import { TestBed } from '@angular/core/testing';

import { CustomerOperationsService } from './customer-operations.service';

describe('CustomerOperationsService', () => {
  let service: CustomerOperationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerOperationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
