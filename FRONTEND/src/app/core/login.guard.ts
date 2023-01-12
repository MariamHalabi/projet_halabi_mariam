import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../shared/les-services/login.service';

@Injectable({
  providedIn: 'root',
})
export class LoginGuard implements CanActivate {
  constructor(private loginS: LoginService, private router: Router) {}

  canActivate(): boolean {
    console.log(this.loginS.connected);
    if (this.loginS.connected) {
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }
}
