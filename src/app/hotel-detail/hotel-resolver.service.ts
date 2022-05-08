import { Injectable } from '@angular/core'
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router'
import { HotelService } from '../hotel-service.service'

@Injectable()
export class HotelResolver implements Resolve<any> {
  constructor(private hotelService:HotelService,private router:Router) {

  }

  resolve(route:ActivatedRouteSnapshot) {
      if(route.params['id'] > 9 || route.params['id'] < 1){
          this.router.navigate(['404']);
      }
    return this.hotelService.getHotelById(route.params['id']);
  }
}
