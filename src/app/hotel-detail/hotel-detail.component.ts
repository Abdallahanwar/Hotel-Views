import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IHotel } from '../hotel';
import { HotelService } from '../hotel-service.service';

@Component({
  selector: 'app-hotel-detail',
  templateUrl: './hotel-detail.component.html',
  styleUrls: ['./hotel-detail.component.css']
})
export class HotelDetailComponent implements OnInit {
  id:number = 0;
  hotel!: IHotel;
  constructor(private hotelService:HotelService,private route: ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => this.hotel = data['hotel']);
  }

}
