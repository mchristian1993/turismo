import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-img-user',
  templateUrl: './list-img-user.component.html',
  styleUrls: ['./list-img-user.component.css']
})
export class ListImgUserComponent implements OnInit {
  postsAll = null;
  dataUser = null;
  comments = null;
  dataForm: any = {};
  constructor(private firebase: FirebaseService, private authentication: AuthenticationService, private router: Router) {
    this.dataUser = this.authentication.getDataUserSession().currentUser.uid;
  }


  ngOnInit() {
    this.comments = this.firebase.getComments();
    this.postsAll = this.firebase.getPostsAll();
    console.log(this.postsAll.id_usuario);
  }

  deleteImage(id) {
    this.firebase.deletePost(id);
  }

  viewFormUpdatePost(id) {
    this.router.navigate(['/update/' + id]);
  }

}
