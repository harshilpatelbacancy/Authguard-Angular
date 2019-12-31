import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { UserProfile } from '../user-profile';
import { LocalStorageService } from '../local-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  name:string = "";
  username:string = "";
  password:string = "";
  confirm:string = "";
  role:string = "";
  emailRegex:string = '/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/';
  newRegister:UserProfile;

  @ViewChild("nameit", { static: false }) private elementRef: ElementRef;

  constructor(public localService:LocalStorageService, public router:Router) { }

  ngOnInit() {
    this.newRegister = new UserProfile();
  }

  public ngAfterViewInit(): void{
    this.elementRef.nativeElement.focus();
  }


  doRegister(){
    // #region "Validation"

    if(!this.name){
      alert("Please enter name");
      return;
    }

    if(!this.username){
      alert("Please enter username");
      return;
    }

    if(!this.password){
      alert("Please enter password");
      return;
    }

    if(!this.confirm){
      alert("Please enter confirm password");
      return;
    }

    if(this.password != this.confirm){
      alert("Password and confirm password must be the same");
      return;
    }

    if(this.role === ""){
      alert("Please select your role");
      return;
    }

    // #endregion

    // #region "Save user's data in local storage"

    // Prepare an object
    this.newRegister.name = this.name;
    this.newRegister.username = this.username;
    this.newRegister.password = this.password;
    this.newRegister.role = this.role;

    // Add user in localstorage
    this.localService.setUser(this.newRegister);

    alert("User registered successfully.");
    this.router.navigate(['registration/login']);

    // #endregion
  }

  doReset(){
    this.name = "";
    this.username = "";
    this.password = "";
    this.confirm = "";
    this.role = "";
  }
}
