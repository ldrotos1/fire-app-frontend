import { ChartData } from '../../../classes/charts/chartdata';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-apparatus-dept-chart',
  templateUrl: './apparatus-dept-chart.component.html',
  styleUrls: ['./apparatus-dept-chart.component.css']
})
export class ApparatusDeptChartComponent implements OnInit {

  @Input() set chartData( data: ChartData ) {
    this.chartDataPoints[0].data = data.dataPoints;
    this.chartDataPoints[0].label = data.label;
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

  constructor() { }

  ngOnInit() {
  }

}
