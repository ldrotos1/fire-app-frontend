import { ChartData } from '../../classes/charts/chartdata';
import { IncidentResponse } from '../../classes/response/incident-response';
import { ChartDataService } from '../../services/chart-data.service';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-incident-response',
  templateUrl: './incident-response.component.html',
  styleUrls: ['./incident-response.component.css']
})
export class IncidentResponseComponent implements OnInit {

  @Input() incidentResponse: IncidentResponse;
  @Output() clearResponse = new EventEmitter<boolean>();

  private fastestArrivalTime: number;
  private slowestArrivalTime: number;
  private chartData: ChartData;

  constructor( private chartDataService: ChartDataService ) {
  }

  ngOnInit() {

    // Gets the fastest and slowest arrival times
    const lastIndex = this.incidentResponse.respondingApparatus.length - 1;

    this.slowestArrivalTime =
      this.incidentResponse.respondingApparatus[lastIndex].travelTime;

    this.fastestArrivalTime =
      this.incidentResponse.respondingApparatus[0].travelTime;

    // Gets the bar chart data
    this.chartData = this.chartDataService.getResponseUnitChartData(
      this.incidentResponse.respondingApparatus );
  }

  /**
   * Clears the current incident response so that a new
   * incident can be simulated
   */
  newIncident() {
    this.clearResponse.emit( true );
  }
}
