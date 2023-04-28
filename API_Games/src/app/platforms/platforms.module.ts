import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlatformsRoutingModule } from './platforms-routing.module';
import { PlatformPageComponent } from './components/platform-page/platform-page.component';
import { PlatformDetailComponent } from './components/platforms-detail/platforms-detail.component';


@NgModule({
  declarations: [
    PlatformPageComponent,
    PlatformDetailComponent
  ],
  imports: [
    CommonModule,
    PlatformsRoutingModule
  ]
})
export class PlatformsModule { }
