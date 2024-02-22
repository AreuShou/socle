import { TestBed } from '@angular/core/testing';

import { ClientDashbordService } from './client-dashbord.service';

describe('ClientDashbordService', () => {
  let service: ClientDashbordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientDashbordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
