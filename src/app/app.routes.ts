import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { GuardService } from './services/guard-service.service';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MovieComponent } from './components/movie/movie.component';
import { SearchComponent } from './components/search/search.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const ROUTES: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  { path: 'home',
    component: HomeComponent,
    canActivate: [GuardService]
  },
  { path: 'search',
    component: SearchComponent,
    canActivate: [GuardService]
  },
  {
    path: 'search/:text',
    component: SearchComponent,
    canActivate: [GuardService]
  },
  {
    path: 'movie/:id/:pag',
    component: MovieComponent,
    canActivate: [GuardService]
  },
  {
    path: 'movie/:id/:pag/:lookingFor',
    component: MovieComponent,
    canActivate: [GuardService]
  },
  {
    path: 'notfound',
    component: NotFoundComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'notfound'
  }
];

export const APP_ROUTING = RouterModule.forRoot(ROUTES);
