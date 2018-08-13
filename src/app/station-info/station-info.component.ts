import { Component, OnInit } from '@angular/core';
import { StationLite } from '../classes/StationLite';
import { StationsService } from '../stations.service';

@Component({
  selector: 'app-station-info',
  templateUrl: './station-info.component.html',
  styleUrls: ['./station-info.component.css']
})
export class StationInfoComponent implements OnInit {

  private stations: StationLite[];

  constructor( private stationsService: StationsService ) { }

  ngOnInit() {

    this.getStations();
  }

  getStations(): void {

    this.stationsService.getStations()
      .subscribe( stations => this.stations = stations );
  }
}
