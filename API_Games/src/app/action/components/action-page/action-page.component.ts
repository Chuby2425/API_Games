import { Component , OnInit  } from '@angular/core';
import { GamesService } from 'src/app/shared/services/games/games.service';

@Component({
  selector: 'app-action-page',
  templateUrl: './action-page.component.html',
  styleUrls: ['./action-page.component.css']
})
export class ActionPageComponent implements OnInit {

  constructor(private gamesService: GamesService){ }

  games: any;

  ngOnInit(): void{
    this.gamesService.getGames()
      .subscribe(
        (data: any) => {
          this.games = data.results;
          //this.moviesCategory = data.name;
        }
      );
  }
}