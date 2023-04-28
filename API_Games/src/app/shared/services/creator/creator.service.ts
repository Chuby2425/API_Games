import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Game } from 'src/app/Interfaces/game'
import { Creator } from 'src/app/Interfaces/game';


@Injectable({
  providedIn: 'root'
})
export class CreatorService {

  constructor(private http: HttpClient) {}
    apiKey: string = 'd4e382cfc6414bc8ae6ab2afc166b36d';
    apiUrl: string = 'https://api.rawg.io/api/';

//para los detalles de los creadores
    getCreatorDetail(): Observable<Creator[]> {
      return this.http
        .get<Creator[]>(`${this.apiUrl}creator?&key=${this.apiKey}`)
        .pipe(
          map((response: any) => {
            return response.results;
          })
        );
    }

    getGamesByCreator(creator: number): Observable<Game[]> {
      return this.http
        .get<Game[]>(`${this.apiUrl}games?&creator=${creator}&key=${this.apiKey}`)
        .pipe(
          map((response: any) => {
            return response.results;
          })
        );
    }


//obtiene el id de las plataformas
getCreator(creatorid: number){
  return this.http.get('https://api.rawg.io/api/creators'+ creatorid +'?key=d4e382cfc6414bc8ae6ab2afc166b36d');
}

// llama las plataformas del API
getCreators(){
  return this.http.get('https://api.rawg.io/api/creators?key=d4e382cfc6414bc8ae6ab2afc166b36d');
}

}
