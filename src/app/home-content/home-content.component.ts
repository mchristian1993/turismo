import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';
@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.css']
})
export class HomeContentComponent implements OnInit {
isAuthenticated: boolean = false;
  constructor(private authentication: AuthenticationService) {
     authentication.isAuthenticated().subscribe((result) => {
      if (result && result.uid) {
        this.isAuthenticated = true;

      } else {
        this.isAuthenticated = false;
      }
    }, (error) => {
      this.isAuthenticated = false;
    });
  }

  ngOnInit() {
  }

}
