import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
login: any = {};
  constructor(private authentication: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }
 public signIn() {
    this.authentication.signIn(this.login);
  }
}
