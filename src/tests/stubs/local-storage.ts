const createSpy = jasmine.createSpy;
const store = {};

export class LocalStorageStub {
  getItem = createSpy().and.callFake(key => {
    return store[key];
  });

  setItem = createSpy().and.callFake((key, value) => {
    store[key] = value;
  });

  removeItem = createSpy().and.callFake(key => {
    delete store[key];
  });
}

export const localStorageStub = new LocalStorageStub();
