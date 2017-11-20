import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  public lookingFor: string;
  public movie: any;
  public returnTo: string;
  public movieId: string;
  public identifier: string;

  constructor(public _ps: MovieService, public route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.movieId = params['id'];
      this.returnTo = params['pag'];
      this.identifier = '/movie/' + this.movieId;

      if (params['lookingFor']) {
        this.lookingFor = params['lookingFor'];
      }
      this._ps.getMovie(this.movieId).subscribe(
        (movie) => {
          this.movie = movie;
        },
        (error: Error) => {
          console.log('error', error);
        }
      );
    });
  }

  ngOnInit() {}

}
