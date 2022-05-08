import { Component} from '@angular/core';

@Component({
  selector: 'app-hotels-list',
  templateUrl: './hotels-list.component.html',
  styleUrls: ['./hotels-list.component.css']
})
export class HotelsListComponent{
  searchText!:string;
  constructor() { }

  getResult($event:string){
    this.searchText = $event;
  }
}
