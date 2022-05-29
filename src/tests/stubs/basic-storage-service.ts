import { MemberDefinition } from '../../app/shared/interfaces/MemberDefinition';
import { BasicStorageService } from '../../app/shared/services/basic-storage/basic-storage.service';

export class BasicStorageServiceMock extends BasicStorageService<MemberDefinition> {
  key = 'test';

  parseItem(item: string): MemberDefinition[] {
    return JSON.parse(item);
  }
}
