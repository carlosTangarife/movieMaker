import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from './../environments/environment';
import { DisqusModule } from 'ngx-disqus';
import { ChartsModule } from 'ng2-charts';

import { TRANSLATION_PROVIDERS, TranslateService, TranslatePipe } from './translate';
import { AutenticationService } from './services/autentication.service';
import { MovieService } from './services/movie.service';
import { GuardService } from './services/guard-service.service';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SearchComponent } from './components/search/search.component';
import { GaleryComponent } from './components/galery/galery.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MovieComponent } from './components/movie/movie.component';
import { MovieImgPipe } from './pipes/movie-img.pipe';
import { APP_ROUTING } from './app.routes';
import { FooterComponent } from './components/footer/footer.component';
import { NotFoundComponent } from './components/not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    TranslatePipe,
    LoginComponent,
    SearchComponent,
    GaleryComponent,
    HomeComponent,
    NavbarComponent,
    MovieComponent,
    MovieImgPipe,
    FooterComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    FormsModule,
    APP_ROUTING,
    JsonpModule,
    HttpModule,
    DisqusModule.forRoot('MovieCorner'),
    ChartsModule
  ],
  providers: [TRANSLATION_PROVIDERS, TranslateService, MovieService, AutenticationService, GuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
