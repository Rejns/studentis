import {Component} from '@angular/core';
import {AuthenticationService} from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private authenticationService: AuthenticationService) {}


  /** True if user is authenticated */
  isAuthenticated(): boolean {
    return this.authenticationService.isAuthenticated();
  }

}
