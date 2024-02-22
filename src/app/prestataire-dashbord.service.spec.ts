import { TestBed } from '@angular/core/testing';

import { PrestataireDashbordService } from './prestataire-dashbord.service';

describe('PrestataireDashbordService', () => {
  let service: PrestataireDashbordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrestataireDashbordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
