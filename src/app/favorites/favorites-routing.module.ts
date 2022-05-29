import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoritesComponent } from './favorites.component';
import { FavoritesModule } from './favorites.module';

const routes: Routes = [
  {
    path: '',
    component: FavoritesComponent,
  },
];

@NgModule({
  imports: [FavoritesModule, RouterModule.forChild(routes)],
})
export class FavoritesRoutingModule {}
