import { Component, AfterViewInit } from '@angular/core';

declare var M: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  title = 'frontend';

  ngAfterViewInit(): void {
    setTimeout( function() {
      var elem = document.querySelector('.sidenav');
      var instance = M.Sidenav.init(elem);
    }, 0)
  }
}
