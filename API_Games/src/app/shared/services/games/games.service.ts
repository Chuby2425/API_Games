import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(private http: HttpClient) { }

  getGames(){
    return this.http.get('https://api.rawg.io/api/games?key=d4e382cfc6414bc8ae6ab2afc166b36d');
  }
}
