import {Component, OnInit} from '@angular/core';
import {FirebaseService} from '../services/firebase.service';
import {ActivatedRoute} from '@angular/router';
import {AuthenticationService} from '../services/authentication.service';
import {forEach} from '@angular/router/src/utils/collection';

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

  constructor(private firebase: FirebaseService, private authentication: AuthenticationService, private route: ActivatedRoute) {

  }


  ngOnInit() {


    this.idPost = this.route.snapshot.params['id'];
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


  }

  public getuser() {
    return this.useremail;
  }

  public getuserid() {
    return this.id_dataUser;
  }
}
