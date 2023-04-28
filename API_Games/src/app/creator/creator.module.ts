import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatorRoutingModule } from './creator-routing.module';
import { CreatorPageComponent } from './components/creator-page/creator-page.component';
import { CreatorDetailComponent } from './components/creator-detail/creator-detail.component';


@NgModule({
  declarations: [
    CreatorPageComponent,
    CreatorDetailComponent
  ],
  imports: [
    CommonModule,
    CreatorRoutingModule
  ]
})
export class CreatorModule { }
