import { Component, Input, OnInit } from '@angular/core';
import { MemberDefinition } from '../../shared/interfaces/MemberDefinition';
import { FavoritesStorageService } from '../../shared/services/favorites-storage/favorites-storage.service';
import { RestApiService } from '../../shared/services/rest-api/rest-api.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss'],
})
export class MembersComponent implements OnInit {
  @Input() login: string;
  @Input() organization: { name: string; link: string };

  displayedColumns: string[] = ['avatar', 'login', 'github', 'actions'];
  dataSource: Array<MemberDefinition> = [];

  constructor(private restApi: RestApiService, private favoritesStorage: FavoritesStorageService) {}

  ngOnInit() {
    this.getMembers();
  }

  getMembers() {
    return this.restApi.getPublicMembers(this.login).subscribe((data: any[]) => {
      this.dataSource = data.map(({ login, avatar_url, html_url }) => ({
        login,
        avatar_url,
        html_url,
        organization: this.organization,
        is_favorite: this.favoritesStorage.getItem({ key: 'login', val: login }) ? true : false,
      }));
    });
  }

  add(member: MemberDefinition) {
    member.is_favorite = true;
    this.favoritesStorage.setItem(member);
  }

  remove(member: MemberDefinition) {
    member.is_favorite = false;
    this.favoritesStorage.removeItem({ key: 'login', val: member.login });
  }
}
