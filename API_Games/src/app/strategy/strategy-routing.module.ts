import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StrategyPageComponent } from './components/strategy-page/strategy-page.component';


const routes: Routes = [
  { path: '', component: StrategyPageComponent },];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StrategyRoutingModule { }
