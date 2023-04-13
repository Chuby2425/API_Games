import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GenresService {

  constructor(private http: HttpClient) { }


  getGenres(){
    return this.http.get('https://api.rawg.io/api/genres?key=d4e382cfc6414bc8ae6ab2afc166b36d&page=1');
  }
}
