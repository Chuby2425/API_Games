import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(private http: HttpClient) { }

  //llamar juegos
  getGames(){
    return this.http.get('https://api.rawg.io/api/games?key=d4e382cfc6414bc8ae6ab2afc166b36d');
  }

  //llamar para pasar de página
  getGamePage(page: number){
    return this.http.get('https://api.rawg.io/api/games?key=d4e382cfc6414bc8ae6ab2afc166b36d&page=' + page);
  }
}
