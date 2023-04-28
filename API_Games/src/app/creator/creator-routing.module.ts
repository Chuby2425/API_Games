import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatorPageComponent } from './components/creator-page/creator-page.component';
import { CreatorDetailComponent } from './components/creator-detail/creator-detail.component';

const routes: Routes = [
  { path: '', component: CreatorPageComponent },
  { path: ':id', component: CreatorDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreatorRoutingModule { }
