import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlatformPageComponent } from './components/platform-page/platform-page.component';

const routes: Routes = [
  { path: '', component: PlatformPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlatformsRoutingModule { }
