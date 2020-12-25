import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router, Routes } from '@angular/router';
import { PostModel } from 'src/app/models/post.model';
import { PostsService } from '../services/post.services';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css'],
})
export class TopComponent implements OnInit {
  alert: boolean = false;
  addUser = new FormGroup({
    emali: new FormControl(''),
    password: new FormControl(''),
  });

  massage: string = '';
  IsRCollapsed: boolean = true;
  IsCollapsed: boolean = true;
  element: any = '';
  username: string = '';
  password: string = '';
  isInvalid: boolean = false;

  constructor(private router: Router, private userService: PostsService) {}

  toggleCollapse() {
    this.IsCollapsed = !this.IsCollapsed;
  }

  toggleRCollapse() {
    this.IsRCollapsed = !this.IsRCollapsed;
  }

  ngOnInit() {}
  handleRegistration() {
    // if (this.username === "admin" && this.password === "1234") {
    //   this.isInvalid = false;
    //   this.router.navigate(['welcome', this.username]);
    // } else {
    //   this.isInvalid = true;
    // }
    this.userService
      .createUser(new PostModel(this.username, ''))
      .subscribe((user) => {
        console.log(
          '🚀 ~ file: top.component.ts ~ line 51 ~ TopComponent ~ this.userService.createUser ~ user',
          user
        );
      });

    console.log(this.username);
    alert('Вы уверены?');
  }

  handleLogin() {
    if (this.username === 'admin' && this.password === '1234') {
      this.isInvalid = false;
      this.router.navigate(['welcome', this.username]);
    } else {
      this.isInvalid = true;
    }
    console.log(this.username);
    alert('Удачных покупок на нашем сайте');
  }

  scrollToElement($element: any): void {
    console.log($element);
    $element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }
}
