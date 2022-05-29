import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry, catchError, throwError } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable()
export class RestApiService {
  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  getOrganizations(page: number, searchValue: string = ''): Observable<any> {
    const q = searchValue ? `q=${searchValue} ` : 'q=';

    return this.http
      .get<any>(`${environment.baseUrl}/search/users?${q}type%3Aorg&page=${page}`)
      .pipe(retry(1), catchError(this.handleError));
  }

  getOrganization(login: string): Observable<any> {
    return this.http.get<any>(`${environment.baseUrl}/orgs/${login}`).pipe(retry(1), catchError(this.handleError));
  }

  getOrganizationRepos(login: string): Observable<any> {
    return this.http
      .get<any>(`${environment.baseUrl}/orgs/${login}/repos`)
      .pipe(retry(1), catchError(this.handleError));
  }

  getContributors(url: string): Observable<any> {
    return this.http.get<any>(url).pipe(retry(1), catchError(this.handleError));
  }

  getPublicMembers(login: string) {
    return this.http
      .get<any>(`${environment.baseUrl}/orgs/${login}/public_members`)
      .pipe(retry(1), catchError(this.handleError));
  }

  private handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    if (error.status !== 404) {
      window.alert(errorMessage);
    }

    return throwError(() => error);
  }
}
