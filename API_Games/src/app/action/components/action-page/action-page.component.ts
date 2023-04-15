import { Component , OnInit  } from '@angular/core';
import { GenresService } from 'src/app/shared/services/genres/genres.service';

interface ApiResponse {
  results: any[];
}

interface GameApiResponse {
  results: any[];
}

@Component({
  selector: 'app-action-page',
  templateUrl: './action-page.component.html',
  styleUrls: ['./action-page.component.css']
})
export class ActionPageComponent implements OnInit {

  genre: any;
  games: any[] = [];

  constructor(private genresService: GenresService) { }

  ngOnInit(): void {
    this.genresService.getGenres()
      .subscribe((data: ApiResponse) => {
        console.log(data)
        this.genre = data.results[0]; // Obtener el primer género
        this.genresService.getGames(this.genre.id) // Obtener los juegos del género
          .subscribe((data: GameApiResponse) => {
            console.log(data)
            this.games = data.results.filter(game => game.genre === this.genre.name);
          });
      });
  }
}

