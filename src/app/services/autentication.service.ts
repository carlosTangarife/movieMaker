import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class AutenticationService {

  public user: any;
  constructor(public afAuth: AngularFireAuth, private _router: Router) {
    this.user = {};

    this.afAuth.authState.subscribe(user => {
      if (!user) {
        return;
      }
      this.user.nombre = user.displayName;
      this.user.uid = user.uid;
    });
  }

  login(typeAccount: string) {
    switch (typeAccount) {
      case 'google':
          this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
          break;
      case 'twitter':
          this.afAuth.auth.signInWithPopup(new firebase.auth.TwitterAuthProvider());
          break;
    }
  }

  logout() {
    this.user = {};
    this.afAuth.auth.signOut();
    this._router.navigate(['login']);
  }

  isAuthenticated() {
    const user = firebase.auth().currentUser;
    if (user) {
    return true;
    } else {
    return false;
    }
  }

}
