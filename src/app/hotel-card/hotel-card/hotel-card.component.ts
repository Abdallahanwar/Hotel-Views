import { Component, Input, OnChanges } from '@angular/core';
import { IHotel } from 'src/app/hotel';
import { HotelService } from 'src/app/hotel-service.service';

@Component({
  selector: 'app-hotel-card',
  templateUrl: './hotel-card.component.html',
  styleUrls: ['./hotel-card.component.css']
})
export class HotelCardComponent implements OnChanges {

  filterHotels:IHotel[] = [];
  @Input() searchText!:string;

  constructor(private hotelService:HotelService) { }

  ngOnChanges() {
    this.hotelService.searchHotels(this.searchText).subscribe(
      data => this.filterHotels = data
    );
  }
}
