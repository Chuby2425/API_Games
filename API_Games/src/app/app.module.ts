import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { ActionModule } from './action/action.module';
import { GenresPageComponent } from './genres/components/genre-page/genre-page.component';
import { Game } from 'src/app/Interfaces/game'

@NgModule({
  declarations: [
    AppComponent,
    GenresPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    ActionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
