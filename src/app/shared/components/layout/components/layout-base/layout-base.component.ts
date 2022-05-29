import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoutePath } from '../../../../enums/route-path.enum';
import { CurrentPageStorageService } from '../../../../services/current-page-storage/current-page-storage.service';

@Component({
  selector: 'app-layout-base',
  templateUrl: './layout-base.component.html',
  styleUrls: ['./layout-base.component.scss'],
})
export class LayoutBaseComponent implements OnInit {
  constructor(private router: Router, private pageStorage: CurrentPageStorageService) {}

  ngOnInit() {}

  resetPage() {
    this.pageStorage.removeItem();
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.navigate([RoutePath.Root]);
  }
}
