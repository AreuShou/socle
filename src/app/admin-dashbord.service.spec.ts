import { TestBed } from '@angular/core/testing';

import { AdminDashbordService } from './admin-dashbord.service';

describe('AdminDashbordService', () => {
  let service: AdminDashbordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminDashbordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
