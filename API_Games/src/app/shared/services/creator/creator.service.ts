import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class CreatorService {

  constructor(private http: HttpClient) {}

// llama las plataformas del API
getCreators(){
  return this.http.get('https://api.rawg.io/api/creators?key=d4e382cfc6414bc8ae6ab2afc166b36d');
}

}
