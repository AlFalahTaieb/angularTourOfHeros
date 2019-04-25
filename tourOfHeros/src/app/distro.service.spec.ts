import { TestBed } from '@angular/core/testing';

import { DistroService } from './distro.service';

describe('DistroService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DistroService = TestBed.get(DistroService);
    expect(service).toBeTruthy();
  });
});
