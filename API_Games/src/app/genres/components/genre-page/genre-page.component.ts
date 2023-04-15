import { Component, OnInit } from '@angular/core';
import { GenresService } from 'src/app/shared/services/genres/genres.service';
import { Genre } from 'src/app/Interfaces/game'

@Component({
  selector: 'app-genre-page',
  templateUrl: './genre-page.component.html',
  styleUrls: ['./genre-page.component.css']
})
export class GenresPageComponent implements OnInit {

  constructor(private genresService: GenresService) { }

  genres: any[] = [];

  ngOnInit(): void {
    this.genresService.getGenre().subscribe({
      next: (genres: Genre[]) => {
        this.genres = genres;
      },
      error: (err) => {
        this.genres = [];
      },
    });
  }
}
