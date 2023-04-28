import { Component,OnInit } from '@angular/core';
import { CreatorService } from 'src/app/shared/services/creator/creator.service';

@Component({
  selector: 'app-creator-page',
  templateUrl: './creator-page.component.html',
  styleUrls: ['./creator-page.component.css']
})
export class CreatorPageComponent implements OnInit  {


  constructor(private creatorService: CreatorService){ }

  creators: any;

  ngOnInit(): void{
    this.creatorService.getCreators()
      .subscribe(
        (data: any) => {
          this.creators = data.results;
        }
      );
  }


}
