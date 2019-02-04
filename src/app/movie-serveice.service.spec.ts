import { TestBed } from '@angular/core/testing';

import { MovieServeiceService } from './movie-serveice.service';

describe('MovieServeiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MovieServeiceService = TestBed.get(MovieServeiceService);
    expect(service).toBeTruthy();
  });
});
