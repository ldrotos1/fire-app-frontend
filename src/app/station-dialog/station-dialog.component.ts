import { Station } from '../classes/station/Station';
import { StationsService } from '../services/stations.service';
import { StationDialogData } from './station-dialog-data';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-station-dialog',
  templateUrl: './station-dialog.component.html',
  styleUrls: ['./station-dialog.component.css']
})
export class StationDialogComponent implements OnInit {

  station: Station;

  constructor(
    private stationsService: StationsService,
    public dialogRef: MatDialogRef<StationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: StationDialogData ) { }

  ngOnInit() {

    // Gets the selected station data
    this.stationsService.getStation( this.data.stationId.toString() )
        .subscribe( station => this.station = station );
  }

  /**
   * Closes this dialog
   */
  closeDialog() {
    this.dialogRef.close();
  }
}
