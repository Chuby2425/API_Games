import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GenresRoutingModule } from './genres-routing.module';
import { GenrePageComponent } from './components/genre-page/genre-page.component';
import { GenresDetailComponent } from './components/genres-detail/genres-detail.component';


@NgModule({
  declarations: [
    GenrePageComponent,
    GenresDetailComponent
  ],
  imports: [
    CommonModule,
    GenresRoutingModule
  ]
})
export class GenresModule { }
