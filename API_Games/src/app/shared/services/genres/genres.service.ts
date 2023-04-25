import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Game } from 'src/app/Interfaces/game'
import { Genre } from 'src/app/Interfaces/game'

@Injectable({
  providedIn: 'root'
})

export class GenresService {
  constructor(private http: HttpClient) {}
  apiKey: string = 'd4e382cfc6414bc8ae6ab2afc166b36d';
  apiUrl: string = 'https://api.rawg.io/api/';

  getGenre(): Observable<Genre[]> {
    return this.http
      .get<Genre[]>(`${this.apiUrl}genres?&key=${this.apiKey}`)
      .pipe(
        map((response: any) => {
          return response.results;
        })
      );
  }
  getGamesByGenre(genre: string): Observable<Game[]> {
    return this.http
      .get<Game[]>(`${this.apiUrl}games?&genres=${genre}&key=${this.apiKey}`)
      .pipe(
        map((response: any) => {
          return response.results;
        })
      );
  }


  //llamar generos
  getGenres(genreid: number){
    return this.http.get('https://api.rawg.io/api/genres/'+ genreid +'?key=d4e382cfc6414bc8ae6ab2afc166b36d');
  }


}


