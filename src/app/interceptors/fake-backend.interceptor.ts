import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable, of, throwError} from 'rxjs';

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {

  constructor() {}


  /** Http interceptor that simulates backend for authentication. */
  intercept(request: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
    const registeredUser = { id: 1, username: 'test', password: 'test' };

    // authenticate
    if (request.url.endsWith('/users/authenticate') && request.method === 'POST') {
      if (request.body.username === registeredUser.username && request.body.password === registeredUser.password) {
        // if login details are valid return 200 OK with a fake jwt token
        const body = {
          id: registeredUser.id,
          username: registeredUser.username,
          token: 'fake-jwt-token'
        };
        return of(new HttpResponse({ status: 200, body }));
      } else {
        // simulate error response
        return throwError({ error: { message: 'Username or password is incorrect' } });
      }
    }

    return next.handle(request);
  }
}
