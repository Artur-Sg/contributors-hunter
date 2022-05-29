import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [SearchComponent],
  imports: [CommonModule, FormsModule, MatInputModule, MatIconModule, MatButtonModule],
  exports: [SearchComponent],
})
export class SearchModule {}
