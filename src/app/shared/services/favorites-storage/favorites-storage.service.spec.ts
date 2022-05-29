import { TestBed } from '@angular/core/testing';
import { publicMemberMock } from '../../../../tests/mocks/public-member';
import { FavoritesStorageService } from './favorites-storage.service';

describe('FavoritesStorageService', () => {
  let service: FavoritesStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [FavoritesStorageService] });
    service = TestBed.inject(FavoritesStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should parse item', () => {
    expect(service.parseItem(JSON.stringify([publicMemberMock]))).toEqual([publicMemberMock]);
  });
});
