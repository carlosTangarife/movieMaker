import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  public popularMovies: any;
  public upcomingMovies: any;
  public childrenMovies: any;
  constructor(private _ps: MovieService) { }

  ngOnInit() {
    this._ps.getUpcomingMovies().subscribe( (movie) => this.upcomingMovies = movie );

    this._ps.getPopularMovies().subscribe( (movie) => this.popularMovies = movie );

    this._ps.getchildrenMovies().subscribe( (movie) => this.childrenMovies = movie );
  }

}
