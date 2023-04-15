import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


interface ApiResponse {
  results: any[];
}

interface GameApiResponse {
  results: any[];
}

@Injectable({
  providedIn: 'root'
})
export class GenresService {

  private gamesUrl = 'https://api.rawg.io/api/games?key=d4e382cfc6414bc8ae6ab2afc166b36d';

  constructor(private http: HttpClient) { }

  getGenres(): Observable<ApiResponse>{
    return this.http.get<ApiResponse>('https://api.rawg.io/api/genres?key=d4e382cfc6414bc8ae6ab2afc166b36d');
  }

  getGames(id: number) {
    const url = `${this.gamesUrl}?genres=${id}`;
    return this.http.get<GameApiResponse>(url);
  }
}
