import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { RoutePath } from '../../enums/route-path.enum';
import { SearchService } from '../../services/search/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit, OnDestroy {
  private subscription: Subscription;

  clearTitle = 'Clear search';
  isExact: boolean;
  value: string;

  constructor(public searchService: SearchService, private router: Router) {}

  search() {
    this.router.navigate([RoutePath.Root]);
    this.searchService.searchValue$.next({ value: this.value, isExact: this.isExact });
  }

  resetSearch() {
    this.value = '';
    this.searchService.searchValue$.next({ value: this.value, isExact: this.isExact });
  }

  ngOnInit() {
    this.subscription = this.searchService.searchValue$.subscribe(({ value, isExact }) => {
      this.value = value;
      this.isExact = isExact;
    });
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
