import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ItemComponent } from './item/item.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [DashboardComponent, ItemComponent],
  imports: [CommonModule, MatPaginatorModule, MatCardModule, MatButtonModule, RouterModule],
  providers: [],
})
export class DashboardModule {}
