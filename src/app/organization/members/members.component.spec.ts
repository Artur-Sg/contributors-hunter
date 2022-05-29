import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FavoritesStorageServiceStub } from '../../../tests/stubs/favorites-storage-service';
import { RestApiServiceStub } from '../../../tests/stubs/rest-api-service';
import { FavoritesStorageService } from '../../shared/services/favorites-storage/favorites-storage.service';
import { RestApiService } from '../../shared/services/rest-api/rest-api.service';
import { MembersComponent } from './members.component';

describe('MembersComponent', () => {
  let component: MembersComponent;
  let fixture: ComponentFixture<MembersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MembersComponent],
      providers: [
        { provide: RestApiService, useClass: RestApiServiceStub },
        { provide: FavoritesStorageService, useClass: FavoritesStorageServiceStub },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
