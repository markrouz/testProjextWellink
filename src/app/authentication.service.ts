import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  login(userEmail: string, userPassword: string) {
    return this.http.post<any>(`${environment.apiUrl}/users/authenticate`, { email: userEmail, password: userPassword })
    .pipe(
      map((user) => {
        if (user) {
          localStorage.setItem('currentUser', JSON.stringify(user));
        }
        return user;
      }));
  }
}
