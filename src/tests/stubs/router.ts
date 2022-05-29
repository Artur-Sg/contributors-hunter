import { NavigationEnd, RouteReuseStrategy } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

const createSpy = jasmine.createSpy;

export class RouterStub {
  url = 'test-url';
  navigate = createSpy();
  createUrlTree = createSpy();
  events = new BehaviorSubject<NavigationEnd>(new NavigationEnd(1, '/test', '/test2'));
  routeReuseStrategy = createSpy().and.returnValue({ shouldReuseRoute: false });
}

export const routerStub = new RouterStub();
