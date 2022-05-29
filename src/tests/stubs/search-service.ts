import { BehaviorSubject } from 'rxjs';

export class SearchServiceStub {
  searchValue$ = new BehaviorSubject({ value: 'test', isExact: false });

  get searchValue() {
    return this.searchValue$.value;
  }
}
