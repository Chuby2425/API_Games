import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenrePageComponent } from './components/genre-page/genre-page.component';
import { GenresDetailComponent } from './components/genres-detail/genres-detail.component';

const routes: Routes = [
  { path: '', component: GenrePageComponent },
  { path: ':id', component: GenresDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GenresRoutingModule { }
