import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FavoritesStorageServiceStub } from '../../../../tests/stubs/favorites-storage-service';
import { RestApiServiceStub } from '../../../../tests/stubs/rest-api-service';
import { FavoritesStorageService } from '../../../shared/services/favorites-storage/favorites-storage.service';
import { RestApiService } from '../../../shared/services/rest-api/rest-api.service';
import { ContributorsComponent } from './contributors.component';

describe('ContributorsComponent', () => {
  let component: ContributorsComponent;
  let fixture: ComponentFixture<ContributorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContributorsComponent],
      providers: [
        { provide: RestApiService, useClass: RestApiServiceStub },
        { provide: FavoritesStorageService, useClass: FavoritesStorageServiceStub },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContributorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
