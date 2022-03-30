import { Component, Input } from '@angular/core';
import { ChartData, ChartType, Color } from 'chart.js';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component  {


  public labels0: string [] = [ 'Carros', 'Perros', 'Estufas' ];
  public  data0: ChartData<'doughnut'> = {
     labels: this.labels0,
     datasets: [
       { data: [ 200, 70, 100 ] }
     ]}


  public labels1: string [] = [ 'Pan', 'Chorizo', 'espagueti' ];
 public  data1: ChartData<'doughnut'> = {
    labels: this.labels1,
    datasets: [
      { data: [ 180, 70, 40 ] }
    ]}
  
    public labels2: string [] = [ 'Sexo', 'Casa', 'Novia' ];
    public  data2: ChartData<'doughnut'> = {
       labels: this.labels2,
       datasets: [
         { data: [ 300, 20, 210 ] }
       ]}


       public labels3: string [] = [ 'Terreno', 'Helicoptero', 'Elefante' ];
       public  data3: ChartData<'doughnut'> = {
          labels: this.labels3,
          datasets: [
            { data: [ 50, 3, 7 ] }
          ]}

  
      }
