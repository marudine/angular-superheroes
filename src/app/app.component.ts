//Component, here, is known as a symbol.
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  styleUrls: [ './app.component.css' ],
  template:
   `
   <h1>{{title}}</h1>
   <nav>
     <a routerLink="/dashboard">Dashboard</a>
     <a routerLink="/heroes">Heroes</a>
   </nav>
    <router-outlet></router-outlet>
  `
})

export class AppComponent {
  title = 'META-HUMAN DATABASE';
}
