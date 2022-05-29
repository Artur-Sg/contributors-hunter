import { TestBed } from '@angular/core/testing';
import { RestApiService } from './rest-api.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { organizationsMock } from '../../../../tests/mocks/organizations';
import { environment } from '../../../../environments/environment';
import { organizationDefinitionMock } from '../../../../tests/mocks/organization-definition';
import { publicMemberMock } from '../../../../tests/mocks/public-member';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

describe('RestApiService', () => {
  let service: RestApiService;
  let httpController: HttpTestingController;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RestApiService],
      imports: [HttpClientTestingModule],
    });

    service = TestBed.inject(RestApiService);
    httpController = TestBed.inject(HttpTestingController);
    httpClient = TestBed.inject(HttpClient);
  });

  afterEach(() => {
    httpController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return organization list', () => {
    service.getOrganizations(1).subscribe(res => {
      expect(res).toEqual(organizationsMock);
    });

    const req = httpController.expectOne({
      method: 'GET',
      url: `${environment.baseUrl}/search/users?q=type%3Aorg&page=1`,
    });

    req.flush(organizationsMock);
  });

  it('should return organization list filtered by query', () => {
    service.getOrganizations(1, 'test').subscribe(res => {
      expect(res).toEqual(organizationsMock);
    });

    const req = httpController.expectOne({
      method: 'GET',
      url: `${environment.baseUrl}/search/users?q=test type%3Aorg&page=1`,
    });

    req.flush(organizationsMock);
  });

  it('should return organization by login', () => {
    const login = 'login';

    service.getOrganization(login).subscribe(res => {
      expect(res).toEqual(organizationDefinitionMock);
    });

    const req = httpController.expectOne({
      method: 'GET',
      url: `${environment.baseUrl}/orgs/${login}`,
    });

    req.flush(organizationDefinitionMock);
  });

  it('should return public member by login', () => {
    const login = 'login';

    service.getPublicMembers(login).subscribe(res => {
      expect(res).toEqual([publicMemberMock]);
    });

    const req = httpController.expectOne({
      method: 'GET',
      url: `${environment.baseUrl}/orgs/${login}/public_members`,
    });

    req.flush([publicMemberMock]);
  });

  it('should throw 404 error', () => {
    const errorMessage = '404 error';
    const testUrl = `${environment.baseUrl}/search/users?q=type%3Aorg&page=0`;

    httpClient.get<any>(testUrl).subscribe({
      error: (error: HttpErrorResponse) => {
        expect(error.status).withContext('status').toEqual(404);
        expect(error.error).withContext('message').toEqual(errorMessage);
      },
    });

    const req = httpController.expectOne(testUrl);

    req.flush(errorMessage, { status: 404, statusText: 'Not Found' });
  });

  it('should throw an error for network error', done => {
    const mockError = new ProgressEvent('error');
    const testUrl = `${environment.baseUrl}/search/users?q=type%3Aorg&page=0`;

    httpClient.get<any>(testUrl).subscribe({
      error: (error: HttpErrorResponse) => {
        expect(error.error).toBe(mockError);
        done();
      },
    });

    const req = httpController.expectOne(testUrl);

    req.error(mockError);
  });
});
