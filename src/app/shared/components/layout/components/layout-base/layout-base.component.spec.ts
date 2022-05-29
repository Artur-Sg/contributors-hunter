import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { CurrentPageStorageServiceStub } from '../../../../../../tests/stubs/current-page-storage-service';
import { RouterStub } from '../../../../../../tests/stubs/router';
import { RoutePath } from '../../../../enums/route-path.enum';
import { CurrentPageStorageService } from '../../../../services/current-page-storage/current-page-storage.service';
import { LayoutBaseComponent } from './layout-base.component';

describe('LayoutComponent', () => {
  let component: LayoutBaseComponent;
  let fixture: ComponentFixture<LayoutBaseComponent>;
  let pageStorageService: CurrentPageStorageService;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LayoutBaseComponent],
      providers: [
        { provide: CurrentPageStorageService, useClass: CurrentPageStorageServiceStub },
        { provide: Router, useClass: RouterStub },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    pageStorageService = TestBed.inject(CurrentPageStorageService);
    router = TestBed.inject(Router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should remove current page from storage and navigate to root path', () => {
    component.resetPage();

    expect(pageStorageService.removeItem).toHaveBeenCalled();
    expect(router.navigate).toHaveBeenCalledWith([RoutePath.Root]);
  });
});
