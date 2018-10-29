import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '@app/core/models/user.model';
import { environment } from '@env/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  constructor(private http: HttpClient) { }

  register(user: User): Observable<Object> {
    return this.http.post(`${environment.apiUrl}/users/register`, user);
  }
}
