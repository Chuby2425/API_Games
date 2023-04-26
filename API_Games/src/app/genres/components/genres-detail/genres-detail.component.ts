import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamesService } from 'src/app/shared/services/games/games.service';
import { GenresService } from 'src/app/shared/services/genres/genres.service';
import { Game } from 'src/app/Interfaces/game';


@Component({
  selector: 'app-genres-detail',
  templateUrl: './genres-detail.component.html',
  styleUrls: ['./genres-detail.component.css']
})
export class GenresDetailComponent implements OnInit {

   constructor(private route: ActivatedRoute, private genresService: GenresService, private gamesService: GamesService) {}

   genreid!: number;
   genredetail: any;
   games: Game[] = [];

   ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.genreid = params['id'];
      this.loadGenreDetail(this.genreid);
      this.loadGamesByGenre(this.genreid)
    });
  }

  loadGenreDetail(genreid: number) {
    this.genresService.getGenres(genreid)
    .subscribe((data: any) => {
      this.genredetail= data;
      console.log(this.genredetail);
    }
    );
  }

  loadGamesByGenre(genreid: number) {
    this.gamesService.getGamesByGenre(genreid)
    .subscribe((data: Game[]) => {
      this.games = data;
    });
  }
}
