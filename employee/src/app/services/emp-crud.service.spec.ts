import { TestBed } from '@angular/core/testing';

import { EmpCrudService } from './emp-crud.service';

describe('EmpCrudService', () => {
  let service: EmpCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpCrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
