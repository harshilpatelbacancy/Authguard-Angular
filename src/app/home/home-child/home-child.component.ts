import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-child',
  templateUrl: './home-child.component.html',
  styleUrls: ['./home-child.component.scss']
})
export class HomeChildComponent implements OnInit {

  userCanRooute:boolean = false;

  constructor() { 
    console.log("Homechild is called");
  }

  ngOnInit() {
  }

  canDeactivate(): boolean {
    if(!this.userCanRooute){
      alert("Please click below button before leaving this page");
      return false;
    }
    return true;
  };

  routeEverywhere(){
    this.userCanRooute = true;
  }

}
