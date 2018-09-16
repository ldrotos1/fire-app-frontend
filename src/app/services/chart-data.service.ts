import { ApparatusType } from '../classes/apparatus/apparatustype';
import { ChartData } from '../classes/charts/chartdata';
import { Department } from '../classes/department/department';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChartDataService {

  private deptUnitLabels: Array<string>;
  private unitDeptLabels: Array<string>;

  constructor() {

    // Creates data labels for the department unit chart
    this.deptUnitLabels = new Array<string>();
    this.deptUnitLabels.push( 'Fire Suppression' );
    this.deptUnitLabels.push( 'Aerial Support' );
    this.deptUnitLabels.push( 'Rescue Operations' );
    this.deptUnitLabels.push( 'Medical Support' );
    this.deptUnitLabels.push( 'Command' );
    this.deptUnitLabels.push( 'Special Incident' );
    this.deptUnitLabels.push( 'General Support' );

    // Creates data labels for the unit type department chart
    this.unitDeptLabels = new Array<string>();
    this.unitDeptLabels.push( 'Fairfax County' );
    this.unitDeptLabels.push( 'Arlington County' );
    this.unitDeptLabels.push( 'Alexandria City' );
    this.unitDeptLabels.push( 'M.W. Airports Authority' );
    this.unitDeptLabels.push( 'Fort Belvoir' );
    this.unitDeptLabels.push( 'Fairfax City' );
    this.unitDeptLabels.push( 'Fort Myer' );
  }

  /**
   * Returns chart data for the department unit
   * catagory chart
   */
  getUnitCategoryChartData( department: Department ): ChartData {

    // Creates the chart data points object
    const chartDataPoints = new Array<number>();
    chartDataPoints.push( department.unitTypeMap[ 'Fire Suppression' ] );
    chartDataPoints.push( department.unitTypeMap[ 'Aerial Support' ] );
    chartDataPoints.push( department.unitTypeMap[ 'Rescue Operations' ] );
    chartDataPoints.push( department.unitTypeMap[ 'Medical Support' ] );
    chartDataPoints.push( department.unitTypeMap[ 'Command' ] );
    chartDataPoints.push( department.unitTypeMap[ 'Special Incident' ] );
    chartDataPoints.push( department.unitTypeMap[ 'General Support' ] );

    // Creates the chart data object
    const chartData = new ChartData();
    chartData.dataLabels = this.deptUnitLabels;
    chartData.label = 'Apparatus Count';
    chartData.dataPoints = chartDataPoints;

    return chartData;
  }

  /**
   * Returns chart data for the unit type department
   * chart
   */
  getDeptUnitTypeChartData( apparatusType: ApparatusType ) {

    // Creates the chart data points object
    const chartDataPoints = new Array<number>();
    chartDataPoints.push( apparatusType.departMap[ 4 ] );
    chartDataPoints.push( apparatusType.departMap[ 1 ] );
    chartDataPoints.push( apparatusType.departMap[ 3 ] );
    chartDataPoints.push( apparatusType.departMap[ 7 ] );
    chartDataPoints.push( apparatusType.departMap[ 5 ] );
    chartDataPoints.push( apparatusType.departMap[ 2 ] );
    chartDataPoints.push( apparatusType.departMap[ 6 ] );

    // Creates the chart data object
    const chartData = new ChartData();
    chartData.dataLabels = this.unitDeptLabels;
    chartData.label = apparatusType.typeName + ' Count';
    chartData.dataPoints = chartDataPoints;

    return chartData;
  }
}
