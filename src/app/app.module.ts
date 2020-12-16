import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './components/hero/hero.component';
import { SearchComponent } from './components/search/search.component';
import { ListingsComponent } from './components/listings/listings.component';
import { WrapperFooterComponent } from './components/wrapper-footer/wrapper-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    SearchComponent,
    ListingsComponent,
    WrapperFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
