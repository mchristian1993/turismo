import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {ContentComponent} from './content/content.component';
import {MenuComponent} from './menu/menu.component';
import {BootstrapModalModule} from 'ng2-bootstrap-modal';
import {CardSitiosComponent} from './card-sitios/card-sitios.component';
import { LoginComponent } from './login/login.component';


const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent}

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
    LoginComponent

  ],
  imports: [
    BrowserModule,
    BootstrapModalModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule {
}
