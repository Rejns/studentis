import {TestBed, inject} from '@angular/core/testing';
import {AuthenticationService} from './authentication.service';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from '../app-routing.module';
import {LoginComponent} from '../ui/login/login.component';
import {OverviewComponent} from '../ui/overview/overview.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {APP_BASE_HREF} from '@angular/common';
import {Location} from '@angular/common';

describe('AuthenticationService', () => {
  let location: Location;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule
      ],
      declarations: [
        LoginComponent, OverviewComponent
      ],
      providers: [
        {provide: APP_BASE_HREF, useValue: '/'},
        AuthenticationService,
      ]
    });

    location = TestBed.get(Location);
  });

  it('should be created', inject([AuthenticationService], (service: AuthenticationService) => {
    expect(service).toBeTruthy();
  }));

  it('logout() should log out user and navigate to /login', inject([AuthenticationService], (service: AuthenticationService) => {
    // mock local storage data
    localStorage.setItem('token', JSON.stringify({ token: 'token' }));
    localStorage.setItem('currentUser', JSON.stringify({ id: '1', name: 'renato' }));

    service.logout().then(() => {
      expect(localStorage.getItem('token')).toBeFalsy();
      expect(localStorage.getItem('currentUser')).toBeFalsy();
      expect(location.path()).toBe('/login');
    });
  }));
});
