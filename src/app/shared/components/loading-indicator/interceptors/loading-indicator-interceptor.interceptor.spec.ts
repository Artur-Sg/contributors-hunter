import { HttpHandler } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { httpRequestMock } from '../../../../../tests/mocks/http-request';
import { httpResponseMock } from '../../../../../tests/mocks/http-response';
import { LoadingIndicatorServiceStub } from '../../../../../tests/stubs/loading-indicator-service';
import { LoadingIndicatorService } from '../services/loading-indicator.service';
import { LoadingIndicatorInterceptor } from './loading-indicator-interceptor.interceptor';

describe('LoadingIndicatorInterceptor', () => {
  const handle = jasmine.createSpy();

  let loadingService: LoadingIndicatorService;
  let interceptor: LoadingIndicatorInterceptor;
  let handler: HttpHandler;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        LoadingIndicatorInterceptor,
        { provide: LoadingIndicatorService, useClass: LoadingIndicatorServiceStub },
      ],
    });

    interceptor = TestBed.inject(LoadingIndicatorInterceptor);
    loadingService = TestBed.inject(LoadingIndicatorService);

    handler = { handle };
  });

  it('should be created', () => {
    expect(interceptor).toBeTruthy();
  });

  it('should start loadingService on interception', () => {
    handle.and.returnValue(of(httpResponseMock));

    interceptor.intercept(httpRequestMock, handler).subscribe(event => {
      expect(event).toBe(httpResponseMock);
      expect(loadingService.start).toHaveBeenCalled();
    });
  });
});
