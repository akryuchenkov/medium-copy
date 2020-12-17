import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './components/hero/hero.component';
import { SearchComponent } from './components/search/search.component';
import { ListingsComponent } from './components/listings/listings.component';
import { WrapperFooterComponent } from './components/wrapper-footer/wrapper-footer.component';
import { ErrorComponent } from './error/error.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FormsModule } from '@angular/forms';
import { from } from 'rxjs';

const appRoutes:Routes = [
 { path: '', component: HeroComponent},
 { path: 'search', component: SearchComponent},
 { path: 'listing', component: ListingsComponent},
 { path: 'footer', component: WrapperFooterComponent},
 { path: 'welcome', component: WelcomeComponent},
 { path: '**', component: ErrorComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    SearchComponent,
    ListingsComponent,
    WrapperFooterComponent,
    ErrorComponent,
    WelcomeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
