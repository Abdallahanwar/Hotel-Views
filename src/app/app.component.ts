import { Component } from "@angular/core";

@Component({
  selector: 'app-root',
  template: `
  <nav class="navbar navbar-expand justify-content-center p-4" style="background-color: #1d1f33;"> 
    <a class="navbar-brand nav-link" routerLink="/hotels" style="color: white;"><i class="fa fa-hotel"></i> {{pageTitle}}</a>
  </nav>
  <div class="container">
    <router-outlet></router-outlet>
  </div>

  <footer class="text-center text-white p-4" style="background-color: #1d1f33;">
  <div class="container"></div>
  <div class="text-center p-3" >
    © 2022 Copyright
  </div>
</footer>
  `
})

export class AppComponent{
  pageTitle:string = 'Hotels';

}