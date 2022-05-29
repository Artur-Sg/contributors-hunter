import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { ActivatedRouteStub } from '../../tests/stubs/activated-route';
import { RestApiServiceStub } from '../../tests/stubs/rest-api-service';
import { RouterStub } from '../../tests/stubs/router';
import { RoutePath } from '../shared/enums/route-path.enum';
import { RestApiService } from '../shared/services/rest-api/rest-api.service';
import { OrganizationComponent } from './organization.component';

describe('OrganizationComponent', () => {
  let component: OrganizationComponent;
  let fixture: ComponentFixture<OrganizationComponent>;
  let activatedRoute = new ActivatedRouteStub();
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrganizationComponent],
      providers: [
        { provide: RestApiService, useClass: RestApiServiceStub },
        { provide: Router, useClass: RouterStub },
        { provide: ActivatedRoute, useValue: activatedRoute },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationComponent);
    component = fixture.componentInstance;

    activatedRoute.testParams = {
      login: 'test_login',
    };

    fixture.detectChanges();

    router = TestBed.inject(Router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return to main page', () => {
    component.back();

    expect(router.navigate).toHaveBeenCalledWith([RoutePath.Root]);
  });
});
