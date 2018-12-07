import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { AuthenticationService } from '../services/authentication.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-img',
  templateUrl: './update-img.component.html',
  styleUrls: ['./update-img.component.css']
})
export class UpdateImgComponent implements OnInit {
  dataUser = null;
  dataForm: any = {};
  dataPost = {};
  eventImage: Event = null;
  idPost: any = 0;
  titleComponent: string = '';

  constructor(private firebase: FirebaseService, private authentication: AuthenticationService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.idPost = this.route.snapshot.params['id'];
    console.log(this.idPost);
    this.dataUser = this.authentication.getDataUser();
  }

  updatePost() {
    if (this.idPost != null) {
      this.dataForm.id=this.idPost;
      this.firebase.updatePost(this.dataForm, this.eventImage, true);
      console.log(this.dataForm);
    } else {
      this.firebase.updatePost(this.dataForm, this.eventImage, false);
      console.log(this.dataForm);
    }
  }

}
