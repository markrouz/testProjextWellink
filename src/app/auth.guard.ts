import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot,
         RouterStateSnapshot, CanLoad, Route } from '@angular/router';
import { Observable} from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad{

  constructor(private router: Router) { }

  canLoadFlag: boolean;

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (localStorage.getItem('currentUser')) {
      // logged in so return true
      this.canLoadFlag = true;
      return true;
    }

    // not logged in so redirect to login page with the return url
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return true;
  }

  canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
    return this.canLoadFlag;
  }
}
