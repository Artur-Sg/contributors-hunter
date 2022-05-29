import { Component, OnInit } from '@angular/core';
import { skip } from 'rxjs';
import { OrganizationItem } from '../shared/interfaces/OrganizationItem';
import { Organizations } from '../shared/interfaces/Organizations';
import { CurrentPageStorageService } from '../shared/services/current-page-storage/current-page-storage.service';
import { RestApiService } from '../shared/services/rest-api/rest-api.service';
import { SearchService } from '../shared/services/search/search.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  organizations: OrganizationItem[] = [];
  page = this.getPage();
  total = 0;

  constructor(
    private restApi: RestApiService,
    private pageStorage: CurrentPageStorageService,
    public searchService: SearchService,
  ) {}

  ngOnInit() {
    this.loadOrganizations();

    this.searchService.searchValue$.pipe(skip(1)).subscribe(() => {
      this.page = 1;
      this.pageStorage.setItem(this.page);

      this.loadOrganizations();
    });
  }

  loadOrganizations() {
    return this.restApi
      .getOrganizations(this.page, this.searchService.searchValue)
      .subscribe(({ items, total_count }: Organizations) => {
        this.organizations = items;
        this.total = total_count;
      });
  }

  pageEvent({ pageIndex }: any) {
    this.page = pageIndex + 1;
    this.pageStorage.setItem(this.page);
    this.loadOrganizations();
  }

  getPage(): number {
    const currentPage = Number(this.pageStorage.getItem());

    return currentPage ?? 1;
  }
}
