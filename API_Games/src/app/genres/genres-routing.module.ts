import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenrePageComponent } from './components/genre-page/genre-page.component';

const routes: Routes = [
  { path: '', component: GenrePageComponent },];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GenresRoutingModule { }
