import { Component, EventEmitter, Input,Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent{
  @Input() searchInput!:string;
  @Output() searchChange = new EventEmitter<string>();

  constructor() { }
  
  searchByName(){
    this.searchChange.emit(this.searchInput);
  }

  emptyText(){
    this.searchInput = '';
  }

}
