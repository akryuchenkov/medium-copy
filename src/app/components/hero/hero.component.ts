import { Component, OnInit } from '@angular/core';
import {Router, Routes} from "@angular/router";

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
username: string = "";
  password: string = "";
  isInvalid: boolean = false;
  constructor(private router: Router) { }

  ngOnInit(){}
  

  handleLogin() {
    if (this.username === "admin" && this.password === "1234") {
      this.isInvalid = false;
      this.router.navigate(['welcome', this.username]);
    } else {
      this.isInvalid = true;
    }
    console.log(this.username);
    alert ("Done");
  }
}