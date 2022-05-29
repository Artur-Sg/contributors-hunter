import { TestBed } from '@angular/core/testing';

import { CurrentPageStorageService } from './current-page-storage.service';

describe('CurrentPageStorageService', () => {
  let service: CurrentPageStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [CurrentPageStorageService] });
    service = TestBed.inject(CurrentPageStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should parse item', () => {
    expect(service.parseItem('1')).toEqual(1);
  });
});
