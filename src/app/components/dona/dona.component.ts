import { Component, Input } from '@angular/core';
import { ChartData, ChartType, Color } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent {

@Input() title: string = "Sin titulo";

  // Doughnut
  @Input ('labels') doughnutChartLabels: string[] = [ 'Label1', 'Label2', 'label3' ];
  @Input ('data') doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [ 350, 450, 100 ] }
    ]
  };
  public doughnutChartType: ChartType = 'doughnut';

public colors: Color [] = [
/*  {backgroundColor: ['#9E120E','#FF5800','#FFB414']}
 */ 

]

}
