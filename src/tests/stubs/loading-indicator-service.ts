const createSpy = jasmine.createSpy;

export class LoadingIndicatorServiceStub {
  start = createSpy();
  stop = createSpy();
}
