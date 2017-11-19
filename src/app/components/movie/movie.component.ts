import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  public search: string;
  public movie: any;
  public returnTo: string;

  constructor(public _ps: MovieService, public route: ActivatedRoute) {
    this.route.params.subscribe(params => {

      this.returnTo = params['pag'];

      if (params['search']) {
        this.movie = params['search'];
      }
      this._ps.getMovie(params['id']).subscribe( (movie) => this.movie = movie );
    });
  }

  ngOnInit() {}

}
