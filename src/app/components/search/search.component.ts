import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public search: string;
  constructor(public _ps: MovieService, public route: ActivatedRoute) {
    this.route.params.subscribe( (params) => {
      if (params['text']) {
        this.search = params['text'];
        this.findMovie();
      }
    });
  }

  ngOnInit() {
  }

  findMovie() {
    if ( this.search.length === 0) {
      return;
    }

    this._ps.getFindMovie( this.search ).subscribe();
  }
}
