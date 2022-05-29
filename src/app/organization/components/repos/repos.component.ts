import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { RepoDefinition } from '../../../shared/interfaces/RepoDefinition';
import { RestApiService } from '../../../shared/services/rest-api/rest-api.service';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.scss'],
})
export class ReposComponent implements OnInit, OnDestroy {
  @Input() login: string;
  @Input() organization: { name: string; link: string };

  repos: Array<RepoDefinition> = [];

  private subscription: Subscription;

  constructor(private restApi: RestApiService) {}

  ngOnInit() {
    this.getRepos();
  }

  getRepos() {
    this.restApi.getOrganizationRepos(this.login).subscribe((data: any[]) => (this.repos = data));
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
