import { BehaviorSubject } from 'rxjs';

const createSpy = jasmine.createSpy;

export class SearchServiceStub {
  searchValue$ = new BehaviorSubject('test');
}
