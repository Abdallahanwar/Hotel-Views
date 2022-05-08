import { Component } from '@angular/core'

@Component({
  template: `
  <div class="text-center">
  <img src="assets/Images/no_result.png" alt="no result found" class="notFoundImage">
    <h1 class="errorMessage">Sorry! the page not found</h1>
    <button class="btn btn-secondary" routerLink="/hotels">Back To Home</button><br><br>
  </div>

  `,
  styleUrls: ['./404.component.css']
})
export class Error404Component{
  constructor() {

  }

}