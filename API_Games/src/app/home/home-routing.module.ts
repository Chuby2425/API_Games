import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { HomeDetailComponent } from './components/home-detail/home-detail.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: ':id', component: HomeDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
