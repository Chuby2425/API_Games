import { Component , OnInit  } from '@angular/core';
import { GenresService } from 'src/app/shared/services/genres/genres.service';
import { Game } from 'src/app/Interfaces/game'


@Component({
  selector: 'app-action-page',
  templateUrl: './action-page.component.html',
  styleUrls: ['./action-page.component.css']
})
export class ActionPageComponent implements OnInit {

  games: Game[] = [];

  constructor(private genreService: GenresService) {}

  ngOnInit(): void {
    this.genreService.getGamesByGenre('action').subscribe({
      next: (games) => {
        this.games = games;
      },
      error: (err) => {
        this.games = [];
      },
    });
  }
}


