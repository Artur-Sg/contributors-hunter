import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { ContributorDefinition } from '../../../shared/interfaces/ContributorDefinition';
import { FavoritesStorageService } from '../../../shared/services/favorites-storage/favorites-storage.service';
import { RestApiService } from '../../../shared/services/rest-api/rest-api.service';

@Component({
  selector: 'app-contributors',
  templateUrl: './contributors.component.html',
  styleUrls: ['./contributors.component.scss'],
})
export class ContributorsComponent implements OnChanges, OnDestroy {
  @Input() url: string;
  @Input() organization: { name: string; link: string };
  @Input() isAccordionOpen: boolean;

  private subscription: Subscription;

  displayedColumns: string[] = ['avatar', 'login', 'github', 'contributions', 'actions'];
  dataSource: Array<ContributorDefinition> = [];

  constructor(private restApi: RestApiService, private favoritesStorage: FavoritesStorageService) {}

  getContributors() {
    this.subscription = this.restApi.getContributors(this.url).subscribe((data: any[]) => {
      if (data && data.length) {
        this.dataSource = data.map(({ login, avatar_url, html_url, contributions }) => ({
          login,
          avatar_url,
          html_url,
          contributions,
          organization: this.organization,
          is_favorite: this.favoritesStorage.getItem({ key: 'login', val: login }) ? true : false,
        }));
      }
    });
  }

  ngOnChanges() {
    if (this.isAccordionOpen) {
      this.getContributors();
    }
  }

  add(member: ContributorDefinition) {
    member.is_favorite = true;
    this.favoritesStorage.setItem(member);
  }

  remove(member: ContributorDefinition) {
    member.is_favorite = false;
    this.favoritesStorage.removeItem({ key: 'login', val: member.login });
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
