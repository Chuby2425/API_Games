import { Component, OnInit } from '@angular/core';
import { PlatformsService } from 'src/app/shared/services/platforms/platforms.service';

@Component({
  selector: 'app-platform-page',
  templateUrl: './platform-page.component.html',
  styleUrls: ['./platform-page.component.css']
})
export class PlatformPageComponent implements OnInit {

  constructor(private platformsService: PlatformsService){ }

  platforms: any;

  ngOnInit(): void{
    this.platformsService.getPlatforms()
      .subscribe(
        (data: any) => {
          this.platforms = data.results;
        }
      );
  }

}
