import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  display = 'none';
  isAuthenticated: boolean = false;
  emailUser: any = null;

  constructor(private authentication: AuthenticationService, private router: Router) {
    authentication.isAuthenticated().subscribe((result) => {
      if (result && result.uid) {
        this.isAuthenticated = true;
        this.emailUser = this.authentication.getDataUserSession().currentUser.email;
      } else {
        this.isAuthenticated = false;
        this.router.navigate(['/login']);
      }
    }, (error) => {
      this.isAuthenticated = false;
    });

  }

  ngOnInit() {
  }

  onCloseHandled() {

    this.display = 'none';

  }


  openModal() {

    this.display = 'block';

  }

  public signOut() {
    this.authentication.signOut();

  }
}
