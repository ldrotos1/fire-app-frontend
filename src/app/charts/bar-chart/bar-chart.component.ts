import { ChartData } from '../../classes/charts/chartdata';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  @Input() set chartData( data: ChartData ) {
    this.chartDataPoints[0].data = data.dataPoints;
    this.chartDataPoints[0].label = data.label;
    this.chartLabels = data.dataLabels;
  }

  chartType = 'horizontalBar';
  chartLabels = [];
  chartDataPoints: Array<any> = [{
      data: [],
      label: ''
  }];
  chartOptions: any = {
    responsive: true,
    scales: {
      xAxes: [{ ticks: { beginAtZero: true } }]
    }
  };
  chartLegend = false;

  constructor() { }

  ngOnInit() {
  }

}
