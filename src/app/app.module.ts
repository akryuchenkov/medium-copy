import { BrowserModule } from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AboutComponent }   from './components/about.component';
import { HomeComponent }   from './components/home.component';
import { NotFoundComponent }   from './components/not-found.component';
import { WrapperFooterComponent } from './components/wrapper-footer/wrapper-footer.component';
import { FormsModule } from '@angular/forms';
import { TestComponent } from './components/test/test.component';
import { MainComponent } from './components/main/main.component';
import { TopComponent } from './components/top/top.component';
import { FoterComponent } from './components/foter/foter.component';

const appRoutes: Routes =[
  {path: 'test', component:TestComponent},
  {path: 'test2', component:TopComponent},
  {path: 'test3', component:MainComponent},
  {path: 'test4', component:FoterComponent},
  { path: '', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: '**', component: NotFoundComponent }

  

  ,

];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent, 
    AboutComponent,
    NotFoundComponent,
    WrapperFooterComponent,
    TestComponent,
    MainComponent,
    TopComponent,
    FoterComponent,
  
    
  ],
  imports:      [ BrowserModule,FormsModule, RouterModule.forRoot(appRoutes)],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
