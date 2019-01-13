import { AppRoutingModule } from './app-routing.module';
import {LoginComponent} from './ui/login/login.component';
import {OverviewComponent} from './ui/overview/overview.component';
import {TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {routes} from './app-routing.module';
import {Router} from '@angular/router';
import {AppComponent} from './app.component';
import {HeaderComponent} from './ui/header/header.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {Location} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

describe('AppRoutingModule', () => {
  let appRoutingModule: AppRoutingModule;
  let router: Router;
  let location: Location;
  let fixture;

  beforeEach(() => {
    appRoutingModule = new AppRoutingModule();

    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(routes),
        FormsModule,
        ReactiveFormsModule,
        NgbModule,
        HttpClientModule
      ],
      declarations: [
        AppComponent, HeaderComponent, LoginComponent, OverviewComponent
      ]
    });

    router = TestBed.get(Router);
    location = TestBed.get(Location);

    fixture = TestBed.createComponent(AppComponent);
    router.initialNavigation();
  });

  it('should create an instance', () => {
    expect(appRoutingModule).toBeTruthy();
  });

  it('should navigate to /login when path is /', () => {
    router.navigate(['']).then(() => {
      expect(location.path()).toBe('/login');
    });
  });
});
