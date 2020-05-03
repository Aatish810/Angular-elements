import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(private _router: Router) {

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let token: string = sessionStorage.getItem("token");
    if (token) {
      return true;
    }
    else {
      this._router.navigate(["/security/login"], {
        queryParams: {
          returnUrl: state.url
        }
      });
    }
  }
}
