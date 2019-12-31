import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private localStrorage = window.localStorage;

  constructor() { }

  // isAuthenticate() - Check user is authenticated or not.
  isAuthenticate(): boolean{
    if(window.localStorage.getItem("token")){
      return true;
    }else{
      return false;
    }
  }

  // validateUserRole() - Validate user with the given role.
  validateUserRole = (role: string) => {
    if(role === this.localStrorage.getItem("role")){
      return true;
    }else{
      return false;
    }
  }
}
