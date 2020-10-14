import { TestBed } from '@angular/core/testing';

import { MacanicoService } from './macanico.service';

describe('MacanicoService', () => {
  let service: MacanicoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MacanicoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
