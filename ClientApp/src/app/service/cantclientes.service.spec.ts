import { TestBed } from '@angular/core/testing';

import { CantclientesService } from './cantclientes.service';

describe('CantclientesService', () => {
  let service: CantclientesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CantclientesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
