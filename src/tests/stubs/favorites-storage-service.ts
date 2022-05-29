import { publicMemberMock } from '../mocks/public-member';

const createSpy = jasmine.createSpy;

export class FavoritesStorageServiceStub {
  getItem = createSpy().and.returnValue([publicMemberMock]);
}
