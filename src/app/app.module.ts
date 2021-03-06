import { Pipe, NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { AppRoutingModule }     from './app-routing.module';

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent } from './heroes.component';
import { HeroService } from './hero.service';
import { DashboardComponent } from './dashboard.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
],
  declarations: [ //You must declare every component in an NgModule class.
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent,
  ],

  providers: [ HeroService ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
