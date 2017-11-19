import { Component, OnInit } from '@angular/core';

import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

import { TranslateService } from './translate';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  public translatedText: string;
  public supportedLanguages: Array<{display: string, value: string}>;
  public items: Observable<any[]>;

  constructor(
    private _db: AngularFirestore,
    private _translate: TranslateService
  ) {
    this.items = _db.collection('usuarios').valueChanges();
  }

  ngOnInit(): void {
    // standing data
    this.supportedLanguages = [
      { display: 'English', value: 'en' },
      { display: 'Español', value: 'es' }
    ];

    // set current langage
    this.selectLang('es');
  }

  isCurrentLang(lang: string) {
    // check if the selected lang is current lang
    return lang === this._translate.currentLang;
  }

  selectLang(lang: string) {
    // set current lang;
    this._translate.use(lang);
    this.refreshText();
  }

  refreshText() {
    // refresh translation when language change
    this.translatedText = this._translate.instant('hello world');
  }
}
