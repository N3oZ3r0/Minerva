import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
@Component({
  selector: 'app-bars',
  templateUrl: './bars.component.html',
  styleUrls: ['./bars.component.css']
})
export class BarsComponent implements OnInit {

  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: Label[] = ['Apunte 1', 'Apunte 2', 'Apunte 3', 'Apunte 4', 'Apunte 5', 'Apunte 6', 'Apunte 7', 'Apunte 8', 'Apunte 9'];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];
  barChartData: ChartDataSets[] = [
    { data: [45, 37, 60, 70, 46, 33, 70, 46, 33], label: 'Euros',
    backgroundColor: '#3C6E71' }

  ];


  constructor() { }

  ngOnInit(): void {
  }

}
