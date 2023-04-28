import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatorRoutingModule } from './creator-routing.module';
import { CreatorPageComponent } from './components/creator-page/creator-page.component';



@NgModule({
  declarations: [
    CreatorPageComponent,
  ],
  imports: [
    CommonModule,
    CreatorRoutingModule
  ]
})
export class CreatorModule { }
