import {Injectable} from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFireStorage} from '@angular/fire/storage';
import {Router} from '@angular/router';

@Injectable()
export class AuthenticationService {

  public dataUser: any = {};
  constructor(private db: AngularFireDatabase, private angularFireAuth: AngularFireAuth, private storage: AngularFireStorage, private router: Router) {
  }

// Metodo para iniciar sesion
  public signIn = (dataLogin) => {
    this.angularFireAuth.auth.signInWithEmailAndPassword(dataLogin.email, dataLogin.password)
      .then((response) => {
        this.router.navigate(['/content']);

      })
      .catch((error) => {
        // console.log(error);
        alert('El usuario no esta registrado.');
      });
  }

  // Metodo para cerrar sesion
  public signOut() {
    this.angularFireAuth.auth.signOut();

    this.router.navigate(['/']);
  }
  // Metodo para registrar usuario
  public register = (dataRegister) => {
    this.angularFireAuth.auth.createUserWithEmailAndPassword(dataRegister.email, dataRegister.password)
      .then((response) => {
        dataRegister.id = response.user.uid;
        this.db.database.ref('datos/usuarios/' + dataRegister.id).set(dataRegister);
        alert('usuarios registrado');
        this.router.navigate(['/content']);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  public getDataUserGeneral(id) {
    return this.db.object('datos/usuarios/' + id);
  }


  public getDatapost() {

   return this.db.list('datos/usuarios/').valueChanges();
    }


  // Metodo para validar si el usuario esta autenticado
  public isAuthenticated() {
    return this.angularFireAuth.authState;
  }
  public getDataUserSession() {
    return this.angularFireAuth.auth;
  }
  public setDataUser(data) {
    this.dataUser = data;
  }
  public getDataUser() {
    return this.dataUser;
  }
}
