import { Station } from '../../classes/station/Station';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-station-view',
  templateUrl: './station-view.component.html',
  styleUrls: ['./station-view.component.css']
})
export class StationViewComponent implements OnInit {

  @Input() station: Station;

  private displayedColumns: string[] = [ 'unitDesignator', 'typeName', 'category' ];

  constructor() { }

  ngOnInit() {
  }

}
