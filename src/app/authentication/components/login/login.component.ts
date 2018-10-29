import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
import { UserService } from '@app/core/services/user.service';
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

    this.authService.login(this.email, this.password).pipe(
      catchError(() => {
        this.isValid = false;
        return of(null);
      }))
    .subscribe(() => {
      if (this.isValid) {
        this.router.navigateByUrl('/core');
      }
    });
  }

  private initLoginForm(): void {
    this.loginForm = this.fb.group({
      email: ['', [
        Validators.required,
        Validators.email,
      ],
      ],
      password: ['',
        Validators.required],
    });
  }

  get emailFormControl(): AbstractControl {
    return this.loginForm.controls['email'];
  }

  get passwordFormControl(): AbstractControl {
    return this.loginForm.controls['password'];
  }

  get email(): string {
    return this.emailFormControl.value;
  }

  get password(): string {
    return this.passwordFormControl.value;
  }

  getErrorMessage(): string {
    return this.isValid ? '' : '-Wrong email/password';
  }

}
