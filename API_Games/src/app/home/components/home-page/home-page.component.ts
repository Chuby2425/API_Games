import { Component , OnInit  } from '@angular/core';
import { GamesService } from 'src/app/shared/services/games/games.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

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
