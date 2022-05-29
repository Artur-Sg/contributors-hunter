import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { skip, Subscription } from 'rxjs';
import { RoutePath } from '../shared/enums/route-path.enum';
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
export class DashboardComponent implements OnInit, OnDestroy {
  private subscriptions = new Subscription();

  organizations: OrganizationItem[] = [];
  page = this.getPage();
  total = 0;

  constructor(
    private restApi: RestApiService,
    private pageStorage: CurrentPageStorageService,
    private router: Router,
    public searchService: SearchService,
  ) {}

  ngOnInit() {
    this.loadOrganizations();

    this.subscriptions.add(
      this.searchService.searchValue$.pipe(skip(1)).subscribe(() => {
        this.page = 1;
        this.pageStorage.setItem(this.page);

        this.loadOrganizations();
      }),
    );
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  loadOrganizations() {
    const { value, isExact } = this.searchService.searchValue;

    if (isExact) {
      this.router.navigate(['/', RoutePath.Organizations, value]);
    } else {
      this.subscriptions.add(
        this.restApi
          .getOrganizations(this.page, this.searchService.searchValue.value)
          .subscribe(({ items, total_count }: Organizations) => {
            this.organizations = items;
            this.total = total_count;
          }),
      );
    }
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
