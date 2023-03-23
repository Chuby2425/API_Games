import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActionPageComponent } from './components/action-page/action-page.component';

const routes: Routes = [
  { path: '', component: ActionPageComponent },];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActionRoutingModule { }
