import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlatformPageComponent } from './components/platform-page/platform-page.component';
import { PlatformDetailComponent } from './components/platforms-detail/platforms-detail.component';

const routes: Routes = [
  { path: '', component: PlatformPageComponent },
  { path: ':id', component: PlatformDetailComponent }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlatformsRoutingModule { }
