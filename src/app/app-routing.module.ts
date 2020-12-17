import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HeroComponent} from './components/hero/hero.component';
import { AppComponent } from './app.component';
import {ListingsComponent} from './components/listings/listings.component';
import { SearchComponent } from './components/search/search.component';
import { WrapperFooterComponent } from './components/wrapper-footer/wrapper-footer.component';
import { FormsModule } from '@angular/forms';
import { from } from 'rxjs';

const routes: Routes = [
  {path: 'hero', component: HeroComponent},
  {path: 'listing',component:ListingsComponent },
  {path: 'AppComponent',component:AppComponent },
  {path: 'Search',component:SearchComponent },
  {path: 'Wrapper',component:WrapperFooterComponent  },
  {path: 'FormsModule',component:FormsModule }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
