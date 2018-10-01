import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/app/core/models/user';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {

  authUrl = `${environment.apiUrl}/users/authenticate`;

  constructor(private http: HttpClient) { }

  login(userEmail: string, userPassword: string): Observable<User> {
    return this.http.post<any>(this.authUrl, { email: userEmail, password: userPassword })
    .pipe(
      map((user) => {
        if (user) {
          localStorage.setItem('currentUser', JSON.stringify(user));
        }
        return user;
      }));
  }
}
