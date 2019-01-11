import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable()
export class AuthGuardInterceptor implements HttpInterceptor {

  constructor(private router: Router) {}

  /** Prevent user from using API if user is not logged in. */
  intercept(request: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {

    if (!localStorage.getItem('currentUser')) {
      this.router.navigateByUrl('/login');
    }

    return next.handle(request);
  }
}
