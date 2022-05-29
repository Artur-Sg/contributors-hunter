import { Component, OnInit } from '@angular/core';
import { MemberDefinition } from '../shared/interfaces/MemberDefinition';
import { FavoritesStorageService } from '../shared/services/favorites-storage/favorites-storage.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
})
export class FavoritesComponent implements OnInit {
  displayedColumns: string[] = ['avatar', 'login', 'github', 'organization', 'actions'];
  dataSource: Array<MemberDefinition> = [];

  constructor(private favoritesStorage: FavoritesStorageService) {}

  ngOnInit() {
    this.getMembers();
  }

  getMembers() {
    const items = this.favoritesStorage.getItem();
    this.dataSource = Array.isArray(items) ? items : [];
  }

  add(member: MemberDefinition) {
    member.is_favorite = true;
    this.favoritesStorage.setItem(member);
  }

  remove(member: MemberDefinition) {
    member.is_favorite = false;
    this.favoritesStorage.removeItem({ key: 'login', val: member.login });
    this.dataSource = this.dataSource.filter(m => m.login !== member.login);
  }
}
