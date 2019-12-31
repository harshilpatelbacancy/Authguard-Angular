import { Injectable } from '@angular/core';
import { Router, CanActivateChild } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class ActivateChildGuard implements CanActivateChild {

  constructor(public router:Router){}

  // canActivateChild() - Guard for child
  canActivateChild():boolean{

    // Authentication logic goes here
    let authenticated:boolean = true;
    if(!authenticated){
      this.router.navigate(['pageNotFound/authorization']);
      return false;
    }
    
    return true;
  }
}
