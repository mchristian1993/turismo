import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  register_user: any = {};

  constructor(private authentication: AuthenticationService, private router: Router) {
  }

  ngOnInit() {
  }
public registerUser() {
    this.register_user.rol = 2;
    this.authentication.register(this.register_user);
    console.log('d');
  }
}
