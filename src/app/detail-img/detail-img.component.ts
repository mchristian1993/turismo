import {Component, OnInit} from '@angular/core';
import {FirebaseService} from '../services/firebase.service';
import {ActivatedRoute} from '@angular/router';
import {AuthenticationService} from '../services/authentication.service';
import {AngularFireDatabase} from '@angular/fire/database';


@Component({
  selector: 'app-detail-img',
  templateUrl: './detail-img.component.html',
  styleUrls: ['./detail-img.component.css']
})
export class DetailImgComponent implements OnInit {

  id_dataUser = null;
  idPost: any = null;
  dataPost = {};
  dataUser = {};
  item = null;
  item1 = null;
  useremail = null;
  dataComent: any = {};
  comments = null;

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
        console.log(this.dataUser);
        for (this.item1 in this.dataUser) {
          this.useremail = this.dataUser['email'];
          console.log('e' + this.useremail);
        }
      });
    });
    this.dataUser = this.authentication.getDataUserSession().currentUser.email;


    this.comments = this.firebase.getComments();
    console.log(this.comments);
  }

  public createComment() {
    this.dataComent.id_comentario = Date.now();
    this.dataComent.id_post = this.idPost;
    this.dataComent.id_user_com = this.authentication.getDataUserSession().currentUser.uid;
    console.log(this.dataPost);
    // this.firebase.createPost(this.dataComent, );
    this.db.database.ref('datos/comentarios/' + this.dataComent.id_comentario).set(this.dataComent);
    this.dataComent = {};

  }

  public getuser() {
    return this.useremail;
  }

}
