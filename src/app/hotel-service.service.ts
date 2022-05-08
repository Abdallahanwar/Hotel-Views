import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IHotel } from './hotel';

@Injectable({
  providedIn: 'root'
})
export class HotelService {
  apiUrl = "http://localhost:8888/api/hotel/";
  constructor(private http:HttpClient) { }

  searchHotels(name?:string):Observable<IHotel[]>{
    if(name == null){
      return this.http.get<IHotel[]>(`${this.apiUrl}SearchHotels`);
    }else{
      return this.http.get<IHotel[]>(`${this.apiUrl}SearchHotels/${name}`);
    }
  }

  getHotelById(id: number):Observable<IHotel>{
    return this.http.get<IHotel>(`${this.apiUrl}GetHotelById/${id}`);
  }

}
