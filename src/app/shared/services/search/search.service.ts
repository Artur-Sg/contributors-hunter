import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class SearchService {
  searchValue$ = new BehaviorSubject({ value: '', isExact: false });

  get searchValue() {
    return this.searchValue$.value;
  }
}
