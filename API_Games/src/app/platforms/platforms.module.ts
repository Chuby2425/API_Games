import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlatformsRoutingModule } from './platforms-routing.module';
import { PlatformPageComponent } from './components/platform-page/platform-page.component';


@NgModule({
  declarations: [
    PlatformPageComponent
  ],
  imports: [
    CommonModule,
    PlatformsRoutingModule
  ]
})
export class PlatformsModule { }
