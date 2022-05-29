import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoadingIndicatorComponent } from '../loading-indicator/loading-indicator.component';
import { LoadingIndicatorService } from './services/loading-indicator.service';

@NgModule({
  declarations: [LoadingIndicatorComponent],
  imports: [CommonModule, MatProgressSpinnerModule],
  exports: [LoadingIndicatorComponent],
  providers: [LoadingIndicatorService],
})
export class LoadingIndicatorModule {}
