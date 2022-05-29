import { fakeAsync, TestBed, tick } from '@angular/core/testing';

import { LoadingIndicatorService } from './loading-indicator.service';

describe('LoadingIndicatorService', () => {
  let service: LoadingIndicatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [LoadingIndicatorService] });
    service = TestBed.inject(LoadingIndicatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should correctly change loading status', () => {
    let loading: boolean;

    service.loading$.subscribe(val => {
      loading = val;
    });

    service.start();

    expect(loading).toBeTrue();

    service.stop();

    expect(loading).toBeFalse();
  });
});
