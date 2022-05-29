import { Component, OnInit } from '@angular/core';
import { RoutePath } from '../../../../enums/route-path.enum';

@Component({
  selector: 'app-layout-header',
  templateUrl: './layout-header.component.html',
  styleUrls: ['./layout-header.component.scss'],
})
export class LayoutHeaderComponent {
  get routerLink(): string[] {
    return ['/', RoutePath.Favorites];
  }
}
