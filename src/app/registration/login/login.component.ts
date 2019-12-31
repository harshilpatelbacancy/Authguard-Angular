import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { LocalStorageService } from '../local-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  username: string = "";
  password: string = "";

  @ViewChild("usernameit", {static: false}) private elementRef:ElementRef;

  constructor(private localStorageService:LocalStorageService, private router:Router) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void{
    this.elementRef.nativeElement.focus();
  }

  doLogin(){
    if(!this.username){
      alert("Please enter username");
      return;
    }
    if(!this.password){
      alert("Please enter password");
      return;
    }

    if(this.localStorageService.validateUser(this.username, this.password)){
      this.router.navigate(["/home"]);
    }else{
      alert("Please enter valid credentials");
      return;
    }
  }
}
