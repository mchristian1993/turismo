import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {HeaderComponent} from './header/header.component';
import {FormsModule} from '@angular/forms';
import {FooterComponent} from './footer/footer.component';
import {ContentComponent} from './content/content.component';
import {MenuComponent} from './menu/menu.component';
import {BootstrapModalModule} from 'ng2-bootstrap-modal';
import {CardSitiosComponent} from './card-sitios/card-sitios.component';
import {LoginComponent} from './login/login.component';
import {UbicacionComponent} from './ubicacion/ubicacion.component';
import {environment} from '../environments/environment';
import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import {RegisterComponent} from './register/register.component';
import {AuthenticationService} from './services/authentication.service';
import {FirebaseService} from './services/firebase.service';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {FormImgComponent} from './form-img/form-img.component';

const appRoutes: Routes = [

  {path: 'formimg', component: FormImgComponent},
  {path: 'content', component: ContentComponent},

];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    MenuComponent,
    CardSitiosComponent,
    LoginComponent,
    UbicacionComponent,
    RegisterComponent,
    FormImgComponent

  ],
  imports: [
    BrowserModule,
    BootstrapModalModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule, AngularFireAuthModule,
    BrowserAnimationsModule,
    MatTabsModule,
    FormsModule,
    AngularFireStorageModule

  ],
  providers: [AuthenticationService, FirebaseService],
  bootstrap: [AppComponent],


})
export class AppModule {
}
