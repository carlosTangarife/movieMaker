import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AutenticationService } from './autentication.service';

@Injectable()
export class GuardService implements CanActivate {

  constructor(private autenticacionService: AutenticationService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.autenticacionService.isAuthenticated()) {
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }

}
