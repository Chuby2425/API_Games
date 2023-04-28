import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CreatorService } from 'src/app/shared/services/creator/creator.service';
import { Game } from 'src/app/Interfaces/game';



@Component({
  selector: 'app-creator-detail',
  templateUrl: './creator-detail.component.html',
  styleUrls: ['./creator-detail.component.css']
})
export class CreatorDetailComponent implements OnInit{

  constructor(private route: ActivatedRoute, private creatorService: CreatorService) {}

  creatorid!:number;
  creatordetail: any;
  games: Game[] = [];

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.creatorid = params['id'];
      this.loadCreatorDetail(this.creatorid);
      this.loadGamesByCreator(this.creatorid);
    });
  }


  // con esto carga el plataform
  loadCreatorDetail(creatorid: number) {
    this.creatorService.getCreator(creatorid)
    .subscribe((data: any) => {
      this.creatordetail= data;
      console.log(this.creatordetail);
    }
    );
  }
  //con esto se manda a llamar juegos por plataforma
  loadGamesByCreator(creatorid: number) {
    this.creatorService.getGamesByCreator(creatorid)
    .subscribe((data: Game[]) => {
      this.games = data;
    });
  }

}
