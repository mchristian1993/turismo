import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-detail-img',
  templateUrl: './detail-img.component.html',
  styleUrls: ['./detail-img.component.css']
})
export class DetailImgComponent implements OnInit {
  dataUser = null;
  idPost: any = null;
  dataPost = {};

  constructor(private firebase: FirebaseService, private authentication: AuthenticationService, private route: ActivatedRoute) {
    console.log(this.dataUser);
  }


  ngOnInit() {
    this.dataUser = this.authentication.getDataUser();
    console.log(this.dataUser);
    this.idPost = this.route.snapshot.params['id'];
    this.firebase.getPost(this.idPost).valueChanges().subscribe(post => {
      this.dataPost = post;
    });
  }

}
