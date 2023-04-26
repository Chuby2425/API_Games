import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Game } from 'src/app/Interfaces/game'
import { Platform } from 'src/app/Interfaces/game';

@Injectable({
  providedIn: 'root'
})
export class PlatformsService {
  constructor(private http: HttpClient) {}
  apiKey: string = 'd4e382cfc6414bc8ae6ab2afc166b36d';
  apiUrl: string = 'https://api.rawg.io/api/';




  getPlatformDetail(): Observable<Platform[]> {
    return this.http
      .get<Platform[]>(`${this.apiUrl}platforms?&key=${this.apiKey}`)
      .pipe(
        map((response: any) => {
          return response.results;
        })
      );
  }
  getGamesByPlatform(platform: string): Observable<Game[]> {
    return this.http
      .get<Game[]>(`${this.apiUrl}games?&platforms=${platform}&key=${this.apiKey}`)
      .pipe(
        map((response: any) => {
          return response.results;
        })
      );
  }


  //llamar generos
  getPlatform(platformid: number){
    return this.http.get('https://api.rawg.io/api/platforms/'+ platformid +'?key=d4e382cfc6414bc8ae6ab2afc166b36d');
  }


// de parte del bycho (No sirve de nada )
  getPlatforms(){
    return this.http.get('https://api.rawg.io/api/platforms?key=d4e382cfc6414bc8ae6ab2afc166b36d');
  }

}
