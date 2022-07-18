import { TestBed } from '@angular/core/testing';

import { RedditTopService } from './reddit-top-service.service';

describe('RedditTopServiceService', () => {
  let service: RedditTopService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RedditTopService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
