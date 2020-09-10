import { Component } from '@angular/core';
import { LocalStorageService } from './registration/local-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CoreProject';

  constructor(public localStorageService:LocalStorageService){}

  kickoutUser(){
    this.localStorageService.logout();
  }
}
