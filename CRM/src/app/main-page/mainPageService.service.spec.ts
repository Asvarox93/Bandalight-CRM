/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MainPageServiceService } from './mainPageService.service';

describe('Service: MainPageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MainPageServiceService]
    });
  });

  it('should ...', inject([MainPageServiceService], (service: MainPageServiceService) => {
    expect(service).toBeTruthy();
  }));
});