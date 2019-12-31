import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthGuardService implements CanActivate{

  constructor(public authService:AuthService, public router:Router) { }

  canActivate(route: ActivatedRouteSnapshot):boolean{
    if(!this.authService.isAuthenticate()){
      this.router.navigate(["registration/login"]);
      return false;
    }
    if(route.data.expectedRole && !this.authService.validateUserRole(route.data.expectedRole)){
      this.router.navigate(["pageNotFound/authorization"]);
      return false;
    }
    return true;
  }
}
