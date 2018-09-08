import { CrosshairViewService } from './services/crosshair-view.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private isCrosshairActive = false;

  constructor( private crosshairService: CrosshairViewService ) {
  }

  ngOnInit() {

    // Watches for changes in the crosshair cursor state
    this.crosshairService.watchCrosshairState.subscribe(
      state => { this.isCrosshairActive = state; } );
  }
}
