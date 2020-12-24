import { BrowserModule } from '@angular/platform-browser';
import {Routes, RouterModule, } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { TestComponent } from './components/test/test.component';
import { MainComponent } from './components/main/main.component';
import { TopComponent } from './components/top/top.component';
import { FoterComponent } from './components/foter/foter.component';
import { NewPageforSaleComponent } from './components/new-pagefor-sale/new-pagefor-sale.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { SellAHouseComponent } from './components/sell-ahouse/sell-ahouse.component';
import { PromotionsComponent } from './components/promotions/promotions.component';




const appRoutes: Routes =[

 
  {path: '', component: TopComponent},
  {path: 'TESTSearch', component:TestComponent},
  {path: 'Home#1', component: NewPageforSaleComponent},
  {path: 'Sell', component:SellAHouseComponent},
  {path: 'Feedback',component:FeedbackComponent},
  {path: 'Promotions',component:PromotionsComponent}
  ,

];

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    MainComponent,
    TopComponent,
    FoterComponent,
    NewPageforSaleComponent,
    FeedbackComponent,
    SellAHouseComponent,
    PromotionsComponent,
  
  
    
  ],
  imports:      [ BrowserModule,FormsModule, RouterModule.forRoot(appRoutes)],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
