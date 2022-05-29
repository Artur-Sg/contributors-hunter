import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GithubComponent } from './github/github.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [GithubComponent],
  imports: [CommonModule, MatIconModule],
  exports: [GithubComponent],
})
export class IconsModule {}
