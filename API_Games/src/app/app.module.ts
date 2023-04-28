import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { GenrePageComponent } from './genres/components/genre-page/genre-page.component';
import { Game } from 'src/app/Interfaces/game';
import { PlatformPageComponent } from './platforms/components/platform-page/platform-page.component';
import { ContactComponent } from './contact/components/contact/contact.component';
import { InfoComponent } from './info/components/info/info.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    InfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    NgbModalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
