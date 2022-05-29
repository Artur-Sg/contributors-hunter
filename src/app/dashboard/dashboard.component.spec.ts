import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { CurrentPageStorageServiceStub } from '../../tests/stubs/current-page-storage-service';
import { RestApiServiceStub } from '../../tests/stubs/rest-api-service';
import { RouterStub } from '../../tests/stubs/router';
import { SearchServiceStub } from '../../tests/stubs/search-service';
import { CurrentPageStorageService } from '../shared/services/current-page-storage/current-page-storage.service';
import { RestApiService } from '../shared/services/rest-api/rest-api.service';
import { SearchService } from '../shared/services/search/search.service';
import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardComponent],
      providers: [
        { provide: RestApiService, useClass: RestApiServiceStub },
        { provide: CurrentPageStorageService, useClass: CurrentPageStorageServiceStub },
        { provide: SearchService, useClass: SearchServiceStub },
        { provide: Router, useClass: RouterStub },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
