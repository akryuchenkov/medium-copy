import { BrowserModule } from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent }   from './components/about.component';
import { HomeComponent }   from './components/home.component';
import { NotFoundComponent }   from './components/not-found.component';
import { HeroComponent } from './components/hero/hero.component';
import { SearchComponent } from './components/search/search.component';
import { ListingsComponent } from './components/listings/listings.component';
import { WrapperFooterComponent } from './components/wrapper-footer/wrapper-footer.component';
import { FormsModule } from '@angular/forms';

const appRoutes: Routes =[
  { path: '', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    HomeComponent, 
    AboutComponent,
    NotFoundComponent,
    SearchComponent,
    ListingsComponent,
    WrapperFooterComponent,

    
  ],
  imports:      [ BrowserModule,FormsModule, RouterModule.forRoot(appRoutes)],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
