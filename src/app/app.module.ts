import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HotelsListComponent } from './hotels-list/hotels-list.component';
import { HotelDetailComponent } from './hotel-detail/hotel-detail.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HotelResolver } from './hotel-detail/hotel-resolver.service';
import { Error404Component } from './errors/404.component';
import { SearchComponent } from './search/search/search.component';
import { HotelCardComponent } from './hotel-card/hotel-card/hotel-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HotelsListComponent,
    HotelDetailComponent,
    Error404Component,
    SearchComponent,
    HotelCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path:"hotels",component:HotelsListComponent},
      {path:"hotels/:id",component:HotelDetailComponent,resolve : {hotel:HotelResolver} },
      { path: '404', component: Error404Component },
      {path:"",redirectTo:'/hotels',pathMatch:"full"},
      {path: '**', redirectTo: '/404'}
    ])
  ],
  providers: [
    HotelResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
