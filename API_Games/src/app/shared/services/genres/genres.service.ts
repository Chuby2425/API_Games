import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


interface ApiResponse {
  results: any[];
}


@Injectable({
  providedIn: 'root'
})
export class GenresService {

  constructor(private http: HttpClient) { }


  getGenres(): Observable<ApiResponse>{
  return this.http.get<ApiResponse>('https://api.rawg.io/api/genres?key=d4e382cfc6414bc8ae6ab2afc166b36d&page=1');
  }
}
