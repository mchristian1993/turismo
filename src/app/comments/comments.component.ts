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
  arreglo = {};
  UserEmailCommen = null;

  item = null;
  item1 = null;
  item2 = null;
  item3 = null;
  useremail = null;

  useremail1 = null;
  id_dataUser = null;
  // cometnarios
  comentarios = null;
  constructor(private db: AngularFireDatabase, private firebase: FirebaseService, private authentication: AuthenticationService, private route: ActivatedRoute) {
  }


  ngOnInit() {
   
    this.idPost = this.route.snapshot.params['id'];
    console.log(this.idPost);
    this.firebase.getPost(this.idPost).valueChanges().subscribe(post => {
      this.dataPost = post;
      for (this.item in this.dataPost) {
        this.id_dataUser = this.dataPost['id_usuario'];
      }
      this.authentication.getDataUserGeneral(this.id_dataUser).valueChanges().subscribe(user => {
        this.dataUser = user;
        for (this.item1 in this.dataUser) {
          this.useremail = this.dataUser['email'];
        }
      });


      this.comments.subscribe(coment => {
        this.comentarios = coment;
        for (this.item2 in this.comentarios) {
          if (this.idPost === this.comentarios[this.item2].id_post) {
            this.UserEmailCommen = this.comentarios[this.item2].id_user_com;
 this.authentication.getDataUserGeneralEmail(this.UserEmailCommen).valueChanges().subscribe(user => {
          this.dataUser = user;
          for (this.item1 in this.dataUser) {
            this.useremail1 = this.dataUser['email'];


            console.log('emal comen ' + this.useremail1);

          }

        });
            console.log('yyy ' + this.UserEmailCommen);
          }

        }





      });
    });


    // obtenemos todos los datos de comentarios
    this.comments = this.firebase.getComments();
  }
  public getuser() {
    return this.useremail;

  }

  public getuserComment() {

    return this.useremail1;
  }
}
