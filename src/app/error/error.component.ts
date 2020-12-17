import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  template:`<div> 
    <h1>Недвижимость</h1>
    <router-outlet></router-outlet>
  </div>`
})
export class ErrorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
