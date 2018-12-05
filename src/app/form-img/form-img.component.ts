import {Component, OnInit} from '@angular/core';
import {FirebaseService} from '../services/firebase.service';
import {AuthenticationService} from '../services/authentication.service';

@Component({
  selector: 'app-form-img',
  templateUrl: './form-img.component.html',
  styleUrls: ['./form-img.component.css']
})
export class FormImgComponent implements OnInit {
  dataUser = null;
  dataForm: any = {};
  eventImage: Event = null;

  constructor(private firebase: FirebaseService, private authentication: AuthenticationService) {
  }

  ngOnInit(): void {
    this.dataUser = this.authentication.getDataUser();
  }

  selectImage(event) {
    this.eventImage = event;
  }

  createPost() {

    this.dataForm.id = Date.now();
    this.dataForm.id_usuario = this.dataUser.id;
    console.log('hola' + this.dataForm.id_usuario);
    this.firebase.createPost(this.dataForm, this.eventImage);
  }

}
