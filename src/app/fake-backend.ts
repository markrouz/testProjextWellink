import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, dematerialize, materialize, mergeMap } from 'rxjs/operators';

export class FakeBackendInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const users: any[] = JSON.parse(localStorage.getItem('users')) || [];

    return of(null).pipe(mergeMap(() => {

      // authenticate
      if (request.url.endsWith('/users/authenticate') && request.method === 'POST') {
        const filteredUsers = users.filter((user) => {
          return user.email === request.body.email && user.password === request.body.password;
        });

        if (filteredUsers.length) {
          const user = filteredUsers[0];
          const reqBody = {
            id: user.id,
            email: user.username,
            password: user.firstName,
          };

          return of(new HttpResponse({ status: 200, body: reqBody }));
        }
        return throwError({ error: { message: 'Username or password is incorrect' } });
      }

      // register user
      if (request.url.endsWith('/users/register') && request.method === 'POST') {

        const newUser = request.body;

        // validation
        const duplicateUser = users.filter(user => user.email === newUser.email).length;
        if (duplicateUser) {
          // return throwError({ error: { message: 'Username "' + newUser.email + '" is already taken' } });
          // todo пока регистрируем единственного юзера через, компонент, оставлю так
          return of(null);
        }

        // save new user
        newUser.id = users.length + 1;
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));

        return of(new HttpResponse({ status: 200 }));
      }

      return next.handle(request);
    }))
    .pipe(materialize())
    .pipe(delay(500))
    .pipe(dematerialize());
  }
}

export let fakeBackendProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: FakeBackendInterceptor,
  multi: true,
};
