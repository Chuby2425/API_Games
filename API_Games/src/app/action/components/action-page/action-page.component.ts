import { Component , OnInit  } from '@angular/core';
import { GenresService } from 'src/app/shared/services/genres/genres.service';



interface ApiResponse {
  results: any[];
}


@Component({
  selector: 'app-action-page',
  templateUrl: './action-page.component.html',
  styleUrls: ['./action-page.component.css']
})
export class ActionPageComponent implements OnInit {


  genres: any[] = [];

  constructor(private genresService: GenresService){ }

  ngOnInit(): void {
    this.genresService.getGenres()
    .subscribe((data: ApiResponse) => {
      this.genres = data.results; });
      }
    }

