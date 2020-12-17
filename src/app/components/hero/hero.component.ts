import { Component, OnInit } from '@angular/core';
import {Router, Routes} from "@angular/router";

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  massage:string= '';
  IsRCollapsed: boolean= true;
  IsCollapsed :boolean = true;
  element: any = "";
username: string = "";
  password: string = "";
  isInvalid: boolean = false;
  constructor(private router: Router) {}

  toggleCollapse(){
      this.IsCollapsed = !this.IsCollapsed;
    }

    toggleRCollapse(){
      this.IsRCollapsed=!this.IsRCollapsed;
    }

  ngOnInit(){}
  handleRegistration() {
    if (this.username === "admin" && this.password === "1234") {
      this.isInvalid = false;
      this.router.navigate(['welcome', this.username]);
    } else {
      this.isInvalid = true;
    }
    console.log(this.username);
    alert ("Вы уверены?");
  }

  handleLogin() {
    if (this.username === "admin" && this.password === "1234") {
      this.isInvalid = false;
      this.router.navigate(['welcome', this.username]);
    } else {
      this.isInvalid = true;
    }
    console.log(this.username);
    alert ("Удачных покупок на нашем сайте");
  }
  
  scrollToElement($element:any): void {
    console.log($element);
    $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }
 
}