import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamesService } from 'src/app/shared/services/games/games.service';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.css'],
})
//Con esto lo que se hace es:  llamar los detalles de los juegos home detail
export class HomeDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private gamesService: GamesService) {}

  gameid!: number;
  gameDetail: any;

  //obtener juegos
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.gameid = params['id'];
      console.log(this.gameid);
      this.loadGameDetail(this.gameid);
    });
  }

  loadGameDetail(gameid: number) {
    this.gamesService.getGamesDetail(gameid)
    .subscribe((data: any) => {
      this.gameDetail = data;
      console.log(this.gameDetail)
    }
    );
  }
}
