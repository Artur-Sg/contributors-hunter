import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganizationComponent } from './organization.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { IconsModule } from '../shared/components/icons/icons.module';
import { MatTableModule } from '@angular/material/table';
import { MembersComponent } from './members/members.component';
import { FavoritesStorageService } from '../shared/services/favorites-storage/favorites-storage.service';

@NgModule({
  declarations: [OrganizationComponent, MembersComponent],
  imports: [CommonModule, MatButtonModule, MatIconModule, IconsModule, MatTableModule],
  providers: [FavoritesStorageService],
})
export class OrganizationModule {}
