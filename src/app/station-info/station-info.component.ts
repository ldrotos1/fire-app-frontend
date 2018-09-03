import { Component, OnInit, OnDestroy } from '@angular/core';
import { StationLite } from '../classes/StationLite';
import { Station } from '../classes/Station';
import { Apparatus } from '../classes/apparatus';
import { StationsService } from '../services/stations.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-station-info',
  templateUrl: './station-info.component.html',
  styleUrls: ['./station-info.component.css']
})
export class StationInfoComponent implements OnInit {

  private title = 'Fire Station Information';
  private icon = 'store_mall_directory';
  private station: Station;
  private displayedColumns: string[] = [ 'unitDesignator', 'typeName', 'category' ];

  constructor( private stationsService: StationsService ) { }

  ngOnInit() {
  }

  /**
   * Gets the station information for the newly
   * selected station
   */
  onStationSelected( stationId ) {

    if ( stationId === 0) {
      this.station = null;
    } else {
      this.stationsService.getStation( stationId )
        .subscribe( station => this.station = station );
    }
  }
}







