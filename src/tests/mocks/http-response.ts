import { HttpHeaders, HttpResponse } from '@angular/common/http';

export const httpResponseMock = new HttpResponse<unknown>({
  body: null,
  headers: new HttpHeaders().set('content-type', ['application/json; charset=utf-8']),
  status: 200,
  statusText: 'OK',
  url: 'https://test.com',
});
