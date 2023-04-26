import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PlatformsService {

  constructor(private http: HttpClient) { }

  getPlatforms(){
    return this.http.get('https://api.rawg.io/api/platforms?key=d4e382cfc6414bc8ae6ab2afc166b36d');
  }
}
