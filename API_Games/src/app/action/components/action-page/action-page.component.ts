import { Component , OnInit  } from '@angular/core';
import { GenresService } from 'src/app/shared/services/genres/genres.service';
import { GamesService } from 'src/app/shared/services/games/games.service';
import { Game } from 'src/app/Interfaces/game'


@Component({
  selector: 'app-action-page',
  templateUrl: './action-page.component.html',
  styleUrls: ['./action-page.component.css']
})
export class ActionPageComponent implements OnInit {

  games: Game[] = [];

  constructor(private genreService: GenresService, private gamesService: GamesService) {}

  ngOnInit(): void {
    this.genreService.getGamesByGenre('').subscribe({
      next: (games) => {
        this.games = games;
      },
      error: (err) => {
        this.games = [];
      },
    });
  }

  loadGamePage(gamePage: number){
    this.gamesService.getGamePage(gamePage)
    .subscribe(
      (data: any) => {
        this.games = data.results;
      }
    )
  }
}


