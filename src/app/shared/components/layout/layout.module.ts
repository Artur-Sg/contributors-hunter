import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutHeaderComponent } from './components/layout-header/layout-header.component';
import { LayoutFooterComponent } from './components/layout-footer/layout-footer.component';
import { LayoutContentComponent } from './components/layout-content/layout-content.component';
import { LayoutBaseComponent } from './components/layout-base/layout-base.component';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { LoadingIndicatorModule } from '../loading-indicator/loading-indicator.module';
import { SearchModule } from '../search/search.module';

@NgModule({
  declarations: [LayoutBaseComponent, LayoutHeaderComponent, LayoutFooterComponent, LayoutContentComponent],
  imports: [CommonModule, RouterModule, MatToolbarModule, MatIconModule, LoadingIndicatorModule, SearchModule],
  exports: [LayoutBaseComponent],
})
export class LayoutModule {}
