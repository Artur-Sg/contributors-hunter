import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class SearchService {
  searchValue$ = new BehaviorSubject('');

  get searchValue() {
    return this.searchValue$.value;
  }
}
