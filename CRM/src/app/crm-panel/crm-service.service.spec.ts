import { TestBed, inject } from '@angular/core/testing';
import { CrmServiceService } from './crm-service.service';

describe('CrmServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CrmServiceService]
    });
  });

  it('should ...', inject([CrmServiceService], (service: CrmServiceService) => {
    expect(service).toBeTruthy();
  }));
});
