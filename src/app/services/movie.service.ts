import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Jsonp } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class MovieService {
  private apiKey: string;
  private urlMoviedb: string;
  public movies: Array<any>;

  constructor( private jsonp: Jsonp) {
    this.apiKey = environment.apiKey.key;
    this.urlMoviedb = environment.apiKey.url;
  }

  public getPopularMovies() {
    const url = `${ this.urlMoviedb }/discover/movie?sort_by=popularity.desc&api_key=${ this.apiKey }&language=es&callback=JSONP_CALLBACK`;
    return this.jsonp.get(url).map( (res) => {
      console.log(res.json().results);
      return res.json().results;
    });
  }

  public getUpcomingMovies() {
    const from = new Date();
    const to = new Date();
    to.setDate(from.getDate() + 7);

    const fromFormat = `${from.getFullYear()}-${from.getMonth() + 1}-${from.getDate()}`;
    const toFormat = `${to.getFullYear()}-${to.getMonth() + 1}-${to.getDate()}`;

    const url = `${ this.urlMoviedb }/discover/movie?primary_release_date.gte=${ fromFormat }&primary_release_date.lte=${ toFormat }&api_key=${ this.apiKey }&language=es&callback=JSONP_CALLBACK`;
    console.log(url);
    return this.jsonp.get(url).map( (res) => res.json().results);
  }

  public getchildrenMovies() {
    const url = `${ this.urlMoviedb }/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${ this.apiKey }&language=es&callback=JSONP_CALLBACK`;
    return this.jsonp.get(url).map( (res) => res.json().results);
  }

  public getFindMovie( texto: string) {
    const url = `${ this.urlMoviedb }/search/movie?query=${ texto }&sort_by=popularity.desc&api_key=${ this.apiKey }&language=es&callback=JSONP_CALLBACK`;
    return this.jsonp.get(url).map( (res) => {
      this.movies = res.json().results;
      return res.json().results;
     });
  }

  public getMovie(id: string) {
    const url = `${ this.urlMoviedb }/movie/${ id }?api_key=${ this.apiKey }&language=es&callback=JSONP_CALLBACK`;
    return this.jsonp.get( url ).map( res => res.json());
  }
}
