import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string = "";
  password: string = "";
  isInvalid: boolean = false;

  constructor() {
  }

  ngOnInit() {
  }

  handleLogin() {
    if (this.username === "admin" && this.password === "1234") {
      this.isInvalid = false;
    } else {
      this.isInvalid = true;
    }
    console.log(this.username)
  }
}
