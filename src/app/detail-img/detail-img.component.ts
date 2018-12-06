import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-detail-img',
  templateUrl: './detail-img.component.html',
  styleUrls: ['./detail-img.component.css']
})
export class DetailImgComponent implements OnInit {
  dataUser = null;
  idPost: any = null;
  dataPost = {};
  dataComent: any = {};

  constructor(private db: AngularFireDatabase, private firebase: FirebaseService, private authentication: AuthenticationService, private route: ActivatedRoute) {
  }


  ngOnInit() {
    this.dataUser = this.authentication.getDataUser();
    console.log(this.dataUser);
    this.idPost = this.route.snapshot.params['id'];
    this.firebase.getPost(this.idPost).valueChanges().subscribe(post => {
      this.dataPost = post;
      this.dataUser = this.authentication.getDataUserSession().currentUser.email;
    });
  }

  createComment() {

    this.dataComent.id_comentario = Date.now();
    this.dataComent.id_post = this.idPost;
    this.dataComent.id_user_com= this.authentication.getDataUserSession().currentUser.uid;
    console.log(this.dataPost);
    //this.firebase.createPost(this.dataComent, );
    this.db.database.ref('datos/comentarios/').set(this.dataComent);
    this.dataComent = {};


  }

}
