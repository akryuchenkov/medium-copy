import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HeroComponent} from './components/hero/hero.component';
import {WelcomeComponent} from "./welcome/welcome.component";
import {ErrorComponent} from "./error/error.component";

const routes: Routes = [
  {path: 'hero', component: HeroComponent},
  {path: 'welcome/:name', component: WelcomeComponent},
  {path: '**', component: ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
