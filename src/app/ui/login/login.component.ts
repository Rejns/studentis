import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  formSubmitted: boolean;
  error: any;

  constructor(private authenticationService: AuthenticationService,
              private formBuilder: FormBuilder,
              private router: Router) { }


  ngOnInit() {
    if (this.authenticationService.isAuthenticated()) {
      this.router.navigateByUrl('/overview');
    }

    this.error = null;
    this.formSubmitted = false;
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }


  /** Login user and on success navigate to /overview. Prevent login if form is invalid. */
  login() {
    this.formSubmitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    this.authenticationService.login(this.f.username.value, this.f.password.value).subscribe(() => {
      this.router.navigateByUrl('/overview');
    }, (res) => {
      this.error = res.error;
    });
  }


  /** Helper for easier form field access */
  get f() {
    return this.loginForm.controls;
  }

}
