import { ApparatusType } from '../../classes/apparatus/apparatustype';
import { ChartData } from '../../classes/charts/chartdata';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-apparatus-view',
  templateUrl: './apparatus-view.component.html',
  styleUrls: ['./apparatus-view.component.css']
})
export class ApparatusViewComponent implements OnInit {

  @Input() apparatusType: ApparatusType;
  @Input() chartData: ChartData;

  private imageBaseUrl = 'http://novafireapp.s3.amazonaws.com/images/';

  constructor() { }

  ngOnInit() {
  }
}
