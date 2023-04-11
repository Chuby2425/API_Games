import { Component , OnInit  } from '@angular/core';
import { GenresService } from 'src/app/shared/services/genres/genres.service';

@Component({
  selector: 'app-action-page',
  templateUrl: './action-page.component.html',
  styleUrls: ['./action-page.component.css']
})
export class ActionPageComponent implements OnInit {

  constructor(private genresService: GenresService){ }

  genres: any;

  ngOnInit(): void{
    this.genresService.getGenres()
      .subscribe(
        (data: any) => {
          this.genres = data.results;
          //this.moviesCategory = data.name;
        }
      );
  }
}
