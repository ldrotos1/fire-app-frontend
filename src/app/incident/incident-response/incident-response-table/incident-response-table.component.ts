import { RespondingApparatus } from '../../../classes/response/responding-apparatus';
import { Component, OnInit, Input } from '@angular/core';
import { Sort } from '@angular/material';

@Component({
  selector: 'app-incident-response-table',
  templateUrl: './incident-response-table.component.html',
  styleUrls: ['./incident-response-table.component.css']
})
export class IncidentResponseTableComponent implements OnInit {

  @Input() respondingUnits: Array<RespondingApparatus>;

  private sortedData: RespondingApparatus[];
  private displayedColumns: string[] = [
    'unitDesignator',
    'typeName',
    'stationName',
    'deptAbbreviation',
    'travelTime'
  ];

  constructor() {}

  ngOnInit() {
    this.sortedData = this.respondingUnits.slice();
  }

  sortData( sort: Sort ) {

    const data = this.sortedData.slice();
    if ( !sort.active || sort.direction === '' ) {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch ( sort.active ) {
        case 'typeName': return this._compare( a.typeName, b.typeName, isAsc );
        case 'stationName': return this._compare( a.stationName, b.stationName, isAsc );
        case 'deptAbbreviation': return this._compare( a.deptAbbreviation, b.deptAbbreviation, isAsc );
        case 'travelTime': return this._compare( a.travelTime, b.travelTime, isAsc );
        default: return 0;
      }
    });
  }

  _compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }
}
