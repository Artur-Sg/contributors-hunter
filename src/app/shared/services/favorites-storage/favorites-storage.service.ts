import { Injectable } from '@angular/core';
import { MemberDefinition } from '../../interfaces/MemberDefinition';
import { BasicStorageService } from '../basic-storage/basic-storage.service';

@Injectable()
export class FavoritesStorageService extends BasicStorageService<MemberDefinition> {
  key = 'favorites';

  parseItem(item: string): MemberDefinition[] {
    return JSON.parse(item);
  }
}
