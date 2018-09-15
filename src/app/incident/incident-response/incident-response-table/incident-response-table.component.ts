import { RespondingApparatus } from '../../../classes/response/responding-apparatus';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-incident-response-table',
  templateUrl: './incident-response-table.component.html',
  styleUrls: ['./incident-response-table.component.css']
})
export class IncidentResponseTableComponent implements OnInit {

  @Input() respondingUnits: RespondingApparatus[];

  private displayedColumns: string[] = [
    'unitDesignator',
    'typeName',
    'stationName',
    'deptAbbreviation',
    'travelTime'
  ];

  constructor() { }

  ngOnInit() {
  }

}
