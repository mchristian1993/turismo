import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';
import {Router} from '@angular/router';
import {FirebaseService} from '../services/firebase.service';

@Component({
  selector: 'app-card-sitios',
  templateUrl: './card-sitios.component.html',
  styleUrls: ['./card-sitios.component.css']
})
export class CardSitiosComponent implements OnInit {
  postsAll = null;

  constructor(private firebase: FirebaseService, private authentication: AuthenticationService, private router: Router) {
  }

  ngOnInit(): void {

    this.postsAll = this.firebase.getPostsAll();
  }

  viewDetailPost(id) {
    this.router.navigate(['/detailimg/' + id]);
  }

}
