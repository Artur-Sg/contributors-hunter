import { HttpHeaders, HttpRequest } from '@angular/common/http';

export const httpRequestMock = new HttpRequest('GET', 'https://test.com', {
  headers: new HttpHeaders().set('content-type', ['application/json; charset=utf-8']),
});
