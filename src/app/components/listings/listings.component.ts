import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css']
})
export class ListingsComponent implements OnInit {
  
  IsCollapsed :boolean = true;
  constructor() { }

  ngOnInit(): void {
  }


  toggleCollapse(){
    this.IsCollapsed = !this.IsCollapsed;
  }
}
