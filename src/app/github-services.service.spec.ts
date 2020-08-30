import { TestBed } from '@angular/core/testing';

import { GithubServicesService } from './github-services.service';

describe('GithubServicesService', () => {
  let service: GithubServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GithubServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
