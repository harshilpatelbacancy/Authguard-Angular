import { Injectable } from '@angular/core';
import { CanLoad, Router, Route } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})

export class CanLoadGuard implements CanLoad {

  constructor(public authService:AuthService,  public router:Router){}

  canLoad():boolean{
    if(!this.authService.isAuthenticate()){
      this.router.navigate(['registration/login']);
      return false;
    }
    return true;
  }
}
