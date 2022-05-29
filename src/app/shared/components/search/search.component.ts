import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoutePath } from '../../enums/route-path.enum';
import { SearchService } from '../../services/search/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  clearTitle = 'Clear search';
  value: string;

  constructor(public searchService: SearchService, private router: Router) {}

  search() {
    this.router.navigate([RoutePath.Root]);
    this.searchService.searchValue$.next(this.value);
  }

  resetSearch() {
    this.value = '';
    this.searchService.searchValue$.next(this.value);
  }

  ngOnInit() {
    this.searchService.searchValue$.subscribe(value => (this.value = value));
  }
}
