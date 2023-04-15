import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GenresRoutingModule } from './genres-routing.module';
import { GenrePageComponent } from './components/genre-page/genre-page.component';


@NgModule({
  declarations: [
    GenrePageComponent
  ],
  imports: [
    CommonModule,
    GenresRoutingModule
  ]
})
export class GenresModule { }
