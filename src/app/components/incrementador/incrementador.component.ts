import { Component, Input,Output,EventEmitter,OnInit } from '@angular/core';
import { Event } from '@angular/router';


@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit  {
  ngOnInit() {
    this.btnclass = `btn ${this.btnclass}`;
  }

  

 @Input('valor') progreso: number = 40;
 @Input() btnclass: string = "btn-danger";   
  


@Output() valorsalida: EventEmitter <number> = new EventEmitter ();

/*   @Input() progreso: number = 50;*/

/*   get getPorcentaje() {

    return `${this.progreso}%`;
  } */

 cambiarValor( valor: number){

  if (this.progreso >= 100 && valor >=0 )
  {
      this.valorsalida.emit(100);
       return this.progreso = 100;
  }
  if (this.progreso <= 0 && valor <0 )
  {
      this.valorsalida.emit(0);
      return  this.progreso = 0;
  }
  
  this.progreso = this.progreso + valor;
  this.valorsalida.emit(this.progreso );
   return this.progreso;
  

 }
 onChange (nuevovalor : number )
 {
   if(nuevovalor >=100){
     this.progreso = 100;
   }else if(nuevovalor <= 0){
     this.progreso = 0
   }else{
     this.progreso =nuevovalor;}

   this.valorsalida.emit(this.progreso);
 }

}
