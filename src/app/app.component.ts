import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <div class="page">
 <!--   <app-hero></app-hero>
   <app-search></app-search>
  <app-listings></app-listings>
  <app-wrapper-footer></app-wrapper-footer> -->  
  <router-outlet></router-outlet>
 </div>`,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Traytventyeight';
}
