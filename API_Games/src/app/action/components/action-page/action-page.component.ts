import { Component , OnInit  } from '@angular/core';
import { GenresService } from 'src/app/shared/services/genres/genres.service';

@Component({
  selector: 'app-action-page',
  templateUrl: './action-page.component.html',
  styleUrls: ['./action-page.component.css']
})
export class ActionPageComponent implements OnInit {

  constructor(private genresservice: GenresService){ }

  genres: any;
  games: any

  ngOnInit(): void{
    this.genresservice.getGenres()
      .subscribe(
        (data: any) => {
          this.genres = data.results;
          //this.moviesCategory = data.name;
        }
      );
  }


}
