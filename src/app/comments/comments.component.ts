import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { AuthenticationService } from '../services/authentication.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  dataUser = null;
  idPost: any = null;
  dataPost = {};
  dataComent: any = {};
  comments = null;

  constructor(private db: AngularFireDatabase, private firebase: FirebaseService, private authentication: AuthenticationService, private route: ActivatedRoute) {
  }


  ngOnInit() {
    this.dataUser = this.authentication.getDataUser();
    console.log(this.dataUser);
    this.idPost = this.route.snapshot.params['id'];
    console.log(this.idPost);
    this.firebase.getPost(this.idPost).valueChanges().subscribe(post => {
      this.dataPost = post;
      this.dataUser = this.authentication.getDataUserSession().currentUser.email;
    });
    //////////obtenemos todos los datos de comentarios
    this.comments = this.firebase.getComments();
    console.log(this.comments);
  }
}
