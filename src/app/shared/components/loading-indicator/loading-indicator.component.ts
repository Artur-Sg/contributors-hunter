import { Component } from '@angular/core';
import { LoadingIndicatorService } from './services/loading-indicator.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading-indicator.component.html',
  styleUrls: ['./loading-indicator.component.scss'],
})
export class LoadingIndicatorComponent {
  constructor(private readonly loadingIndicatorService: LoadingIndicatorService) {}

  get loading$() {
    return this.loadingIndicatorService.loading$;
  }
}
