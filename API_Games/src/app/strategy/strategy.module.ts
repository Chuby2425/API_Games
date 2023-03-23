import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StrategyRoutingModule } from './strategy-routing.module';
import { StrategyPageComponent } from './components/strategy-page/strategy-page.component';


@NgModule({
  declarations: [
    StrategyPageComponent
  ],
  imports: [
    CommonModule,
    StrategyRoutingModule
  ]
})
export class StrategyModule { }
