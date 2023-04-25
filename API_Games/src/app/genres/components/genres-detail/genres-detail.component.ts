import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GenresService } from 'src/app/shared/services/genres/genres.service';


@Component({
  selector: 'app-genres-detail',
  templateUrl: './genres-detail.component.html',
  styleUrls: ['./genres-detail.component.css']
})
export class GenresDetailComponent implements OnInit {

   constructor(private route: ActivatedRoute,private genresService: GenresService ) {}

   genreid!: number;
   genredetail: any;

   ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.genreid = params['id'];
      this.loadGenreDetail(this.genreid);
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
}
