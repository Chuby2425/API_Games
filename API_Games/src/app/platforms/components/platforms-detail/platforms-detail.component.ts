import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlatformsService } from 'src/app/shared/services/platforms/platforms.service';
import { Game } from 'src/app/Interfaces/game';

@Component({
  selector: 'app-platforms-detail',
  templateUrl: './platforms-detail.component.html',
  styleUrls: ['./platforms-detail.component.css']
})



export class PlatformDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private platformService: PlatformsService) {}

  platformid!:number;
  platformdetail: any;
  games: Game[] = [];


  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.platformid = params['id'];
      this.loadPlatformDetail(this.platformid);
      this.loadGamesByPlatform(this.platformid);
    });
  }


  // acuerdese del get hay que cambiarlo
  loadPlatformDetail(platformid: number) {
    this.platformService.getPlatform(platformid)
    .subscribe((data: any) => {
      this.platformdetail= data;
      console.log(this.platformdetail);
    }
    );
  }

  loadGamesByPlatform(platform: number) {
    this.platformService.getGamesByPlatform(platform)
    .subscribe((data: Game[]) => {
      this.games = data;
    });
  }

}
