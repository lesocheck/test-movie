import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiService {

  constructor(
    private http: Http
  ) { }


  fetchCinemes(title) {
    return this.http.get(`http://www.omdbapi.com/?apikey=349f6e62&s=${title}`)
      .map((response: Response) => response);
  }

  fetchCinemaDetails(id) {
    return this.http.get(`http://www.omdbapi.com/?apikey=349f6e62&i=${id}`)
      .map((response: Response) => response);
  }
}
