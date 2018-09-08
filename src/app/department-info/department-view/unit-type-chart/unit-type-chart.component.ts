import { ChartData } from '../../../classes/charts/chartdata';
import { Component, OnInit, Input } from '@angular/core';
import { ChartsModule } from 'ng2-charts';

@Component({
  selector: 'app-unit-type-chart',
  templateUrl: './unit-type-chart.component.html',
  styleUrls: ['./unit-type-chart.component.css']
})
export class UnitTypeChartComponent implements OnInit {

  @Input() set chartData( data: ChartData ) {
    this.chartDataPoints[0].data = data.dataPoints;
    this.chartLabels = data.dataLabels;
  }

  private chartType = 'horizontalBar';
  private chartLabels = [];
  private chartDataPoints: Array<any> = [{
      data: [],
      label: 'Apparatus Count'
  }];
  private chartOptions: any = {
    responsive: true,
    scales: {
      xAxes: [{ ticks: { beginAtZero: true } }]
    }
  };
  public chartLegend = false;

  constructor() {
  }

  ngOnInit() {
  }
}
