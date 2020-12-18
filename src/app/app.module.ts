import { BrowserModule } from '@angular/platform-browser';
import {Routes, RouterModule, } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { TestComponent } from './components/test/test.component';
import { MainComponent } from './components/main/main.component';
import { TopComponent } from './components/top/top.component';
import { FoterComponent } from './components/foter/foter.component';

// определение дочерних маршрутов
const itemRoutes: Routes = [
  { path: 'details', component: FoterComponent},
  { path: 'stat', component: MainComponent},
];

const appRoutes: Routes =[

  {path:"", component:TestComponent,},
  {path: "", component:TestComponent},
 { path: '', component: TopComponent},
  {path: '1', component:TestComponent},
  {path: '2', component:TopComponent},
  {path: '3', component:MainComponent},
  { path: '4', component:FoterComponent}


  

  ,

];

@NgModule({
  declarations: [
    AppComponent,
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
