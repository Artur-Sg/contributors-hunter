const createSpy = jasmine.createSpy;

export class CurrentPageStorageServiceStub {
  getItem = createSpy().and.returnValue(1);
  removeItem = createSpy();
}
