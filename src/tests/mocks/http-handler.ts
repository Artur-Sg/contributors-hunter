const createSpy = jasmine.createSpy();

export const httpHandlerMock = {
  handle: createSpy(),
};
