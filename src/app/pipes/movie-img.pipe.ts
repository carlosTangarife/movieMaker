import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'movieImg'
})
export class MovieImgPipe implements PipeTransform {

  transform(pelicula: any, poster: boolean = false): any {
    const url = 'http://image.tmdb.org/t/p/w300';

    if ( poster ) {
      return url + pelicula.poster_path;
    }

    if ( pelicula.backdrop_path ) {
      return url + pelicula.backdrop_path;
    } else {
      if ( pelicula.poster_path ) {
        return url + pelicula.poster_path;
      } else {
        return 'assets/img/image-no-available.png';
      }
    }
  }

}
