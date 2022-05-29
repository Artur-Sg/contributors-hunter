import { TestBed } from '@angular/core/testing';
import { publicMemberMock } from '../../../../tests/mocks/public-member';
import { BasicStorageServiceMock } from '../../../../tests/stubs/basic-storage-service';
import { localStorageStub } from '../../../../tests/stubs/local-storage';

describe('BasicStorageService', () => {
  let service: BasicStorageServiceMock;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: localStorage, useValue: localStorageStub }],
    });

    service = new BasicStorageServiceMock();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should correctly store items', () => {
    service.setItem(publicMemberMock);

    expect(service.getItem()).toEqual([publicMemberMock]);
    expect(service.getItem({ key: 'login', val: 'login' })).toEqual(publicMemberMock);

    const newPublicMemberMock = { ...publicMemberMock, login: 'test' };

    service.setItem(newPublicMemberMock);

    expect(service.getItem()).toEqual([publicMemberMock, newPublicMemberMock]);

    service.removeItem({ key: 'login', val: 'login' });

    expect(service.getItem()).toEqual([newPublicMemberMock]);

    service.removeItem();

    expect(service.getItem()).toBeNull();
  });
});
