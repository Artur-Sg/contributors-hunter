import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, PartialObserver, tap } from 'rxjs';
import { LoadingIndicatorService } from '../services/loading-indicator.service';

@Injectable()
export class LoadingIndicatorInterceptor implements HttpInterceptor {
  private readonly observer: PartialObserver<any> = {
    error: () => this.loadingIndicatorService.stop(),
    complete: () => this.loadingIndicatorService.stop(),
  };

  constructor(private readonly loadingIndicatorService: LoadingIndicatorService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loadingIndicatorService.start();

    return next.handle(req).pipe(tap(this.observer));
  }
}
