import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { FavoritesComponent } from './favorites.component';
import { FavoritesStorageService } from '../shared/services/favorites-storage/favorites-storage.service';
import { MatButtonModule } from '@angular/material/button';
import { IconsModule } from '../shared/components/icons/icons.module';

@NgModule({
  declarations: [FavoritesComponent],
  imports: [CommonModule, MatTableModule, MatButtonModule, IconsModule],
  providers: [FavoritesStorageService],
})
export class FavoritesModule {}
