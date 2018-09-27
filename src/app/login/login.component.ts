import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { UserService } from '../user.service';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  isValid = true;

  constructor(
    private fb: FormBuilder,
    private authService: AuthenticationService,
    private userService: UserService,
    private router: Router) {}

  ngOnInit() {

    // todo зарегистрируем пользака пока тут
    const registeredUser = { id: 1, email: 'wislatest@wellink.ru', password: 'GfHjkm!@' };
    this.userService.register(registeredUser).subscribe();
    this.initLoginForm();
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      this.isValid = false;
      return;
    }

    this.isValid = true;

    this.authService.login(this.loginForm.controls['email'].value, this.loginForm.controls['password'].value).pipe(
      catchError(() => { this.isValid = false; return of(null); }))
      .subscribe(() => {
        if (this.isValid) { this.router.navigateByUrl('list-page'); }
      });
  }

  private initLoginForm() {
    this.loginForm = this.fb.group({
      email: ['', [
        Validators.required,
        Validators.pattern('[a-zA-Z_]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}'),
      ],
      ],
      password: ['',
        Validators.required],
    });
  }
}
