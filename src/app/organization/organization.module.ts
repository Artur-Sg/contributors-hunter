import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganizationComponent } from './organization.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { IconsModule } from '../shared/components/icons/icons.module';
import { MatTableModule } from '@angular/material/table';
import { MembersComponent } from './components/members/members.component';
import { FavoritesStorageService } from '../shared/services/favorites-storage/favorites-storage.service';
import { ReposComponent } from './components/repos/repos.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { ContributorsComponent } from './components/contributors/contributors.component';
import { RepoComponent } from './components/repos/repo/repo.component';

@NgModule({
  declarations: [OrganizationComponent, MembersComponent, ReposComponent, ContributorsComponent, RepoComponent],
  imports: [CommonModule, MatButtonModule, MatIconModule, IconsModule, MatTableModule, MatExpansionModule],
  providers: [FavoritesStorageService],
})
export class OrganizationModule {}
