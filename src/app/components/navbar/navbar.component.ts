import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AutenticationService } from './../../services/autentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  @Output()
  languageSelected = new EventEmitter<string>();

  constructor( private _router: Router, public autenticationService: AutenticationService) { }

  ngOnInit() {
  }

  searchMovie(texto: string) {
    if ( texto.length === 0 ) {
      return;
    }
    this._router.navigate(['search', texto]);
  }

  changeLanguage(lang: string) {
    this.languageSelected.emit(lang);
  }

}
