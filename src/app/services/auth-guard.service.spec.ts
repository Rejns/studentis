import {TestBed, inject} from '@angular/core/testing';
import {AuthGuardService} from './auth-guard.service';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from '../app-routing.module';
import {LoginComponent} from '../ui/login/login.component';
import {OverviewComponent} from '../ui/overview/overview.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {APP_BASE_HREF} from '@angular/common';

describe('AuthGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule
      ],
      declarations: [LoginComponent, OverviewComponent],
      providers: [
        {provide: APP_BASE_HREF, useValue: '/'},
        AuthGuardService
      ]
    });
  });

  it('should be created', inject([AuthGuardService], (service: AuthGuardService) => {
    expect(service).toBeTruthy();
  }));
});
