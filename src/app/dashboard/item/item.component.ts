import { Component, Input } from '@angular/core';
import { RoutePath } from '../../shared/enums/route-path.enum';
import { OrganizationItem } from '../../shared/interfaces/OrganizationItem';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent {
  @Input() orgDefinition: OrganizationItem;

  get routerLink(): string[] {
    return ['/', RoutePath.Organizations, this.orgDefinition.login];
  }
}
