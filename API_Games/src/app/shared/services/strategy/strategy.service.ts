import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StrategyService {

  constructor() { }

  getStrategy(){
    //return this.http.get('https://api.rawg.io/api/platforms?key=d4e382cfc6414bc8ae6ab2afc166b36d');
  }
}
