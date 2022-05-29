import { Injectable } from '@angular/core';
import { BasicStorageService } from '../basic-storage/basic-storage.service';

@Injectable()
export class CurrentPageStorageService extends BasicStorageService<number> {
  key = 'currentPage';

  parseItem(item: string): number {
    return +item;
  }
}
