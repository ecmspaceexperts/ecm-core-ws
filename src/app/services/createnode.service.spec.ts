import { TestBed } from '@angular/core/testing';

import { CreatenodeService } from './createnode.service';

describe('CreatenodeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreatenodeService = TestBed.get(CreatenodeService);
    expect(service).toBeTruthy();
  });
});
