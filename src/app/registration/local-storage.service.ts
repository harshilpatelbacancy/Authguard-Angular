import { Injectable } from '@angular/core';
import { UserProfile } from './user-profile';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private localStorage = window.localStorage;
  public userToken: any = this.localStorage.getItem('token');
  public userRole: any = this.localStorage.getItem('role');

  constructor(private router:Router) { }

  // setUser() - Set new user in local storage
  setUser(newRegister:UserProfile){
    let dbRegistrations: any[] =  this.getUsers();
    dbRegistrations.push(newRegister);
    this.localStorage.setItem("registrations", JSON.stringify(dbRegistrations));
  }

  // getUsers() - Get list of users from local storage
  getUsers = () => {
    try {
      return JSON.parse(this.localStorage.getItem("registrations")) || [];
    } catch (e) {
      return [];
    }
  }

  // validateUser() - Check the given user is verified or not
  validateUser = (username: string, password: string) => {
    let users: any[] = this.getUsers();
    const user = users.find((value) => value.username === username && value.password === password);
    if(user) {
      this.localStorage.setItem('token', this.uuidv4());
      this.userToken = this.localStorage.getItem('token');
      this.localStorage.setItem('role', user.role);
      this.userRole = this.localStorage.getItem('role');
      return true;
    }
    return false;
  }
  
  // logout() - Logout user from the site.
  logout = () => {
    this.localStorage.setItem("token", '');
    this.localStorage.setItem("role", '');
    this.userToken = null;
    this.router.navigate(['registration/login']);
    this.userRole = null;
  }

  // uuidv4 - Create unique token when user gets logged in.
  uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
}
