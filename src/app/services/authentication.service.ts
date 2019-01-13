import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {catchError, map} from 'rxjs/operators';
import {throwError} from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {

  constructor(private http: HttpClient,
              private router: Router) { }


  /** Send user credentials to backend and on success store token and current user to browser local storage. */
  login(username: string, password: string) {
    return this.http.post<any>(`api/users/authenticate`, { username, password })
      .pipe(map(user => {
          // login successful if there's a jwt token in the response
          if (user && user.token) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('token', JSON.stringify(user.token));
            localStorage.setItem('currentUser', JSON.stringify(user));
          }

          return user;
        }),
        catchError((err) => {
          return throwError(err);
        })
      );
  }


  /** Logout user, clear local storage and navigate to login page */
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('currentUser');
    return this.router.navigateByUrl('/login');
  }


  /** Returns true if user is authenticated */
  isAuthenticated(): boolean {
    if (localStorage.getItem('currentUser')) {
      return true;
    }
    return false;
  }


  /** Returns current user from local storage. */
  getCurrentUser(): any {
    return JSON.parse(localStorage.getItem('currentUser'));
  }
}
