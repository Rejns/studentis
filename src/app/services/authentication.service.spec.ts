import {TestBed, inject} from '@angular/core/testing';
import {AuthenticationService} from './authentication.service';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from '../app-routing.module';
import {LoginComponent} from '../ui/login/login.component';
import {OverviewComponent} from '../ui/overview/overview.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {APP_BASE_HREF} from '@angular/common';
import {AuthGuardService} from './auth-guard.service';

describe('AuthenticationService', () => {
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
        AuthenticationService
      ]
    });
  });

  it('should be created', inject([AuthenticationService], (service: AuthenticationService) => {
    expect(service).toBeTruthy();
  }));
});
