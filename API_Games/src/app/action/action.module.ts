import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActionRoutingModule } from './action-routing.module';
import { ActionPageComponent } from './components/action-page/action-page.component';


@NgModule({
  declarations: [
    ActionPageComponent
  ],
  imports: [
    CommonModule,
    ActionRoutingModule
  ]
})
export class ActionModule { }
