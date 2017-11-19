import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-galery',
  templateUrl: './galery.component.html'
})
export class GaleryComponent implements OnInit {
  @Input() movies;
  @Input() title;
  constructor() { }

  ngOnInit() {
    console.log(this.movies);
  }

}
