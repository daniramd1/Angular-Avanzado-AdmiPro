import { Component, OnDestroy } from '@angular/core';
import { Observable, retry,interval, take, map, filter, Subscription} from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnDestroy{
  
public intervalSubs : Subscription;

  
  ngOnDestroy(): void {
  this.intervalSubs.unsubscribe();
}

  constructor() { 


 /*     //pipe es para conectar otro flujo
    this.retornaobservable().pipe(
    retry(1)
    )
    .subscribe(
      valor => console.log('subs: ',valor),
      error => console.warn('Error', error),
      () => console.info('Observador Completado')
    ); */

   this.intervalSubs= this.retonarIntervalo()
  .subscribe(
    (valor) => console.log(valor),

  )
  
      }

//usando Interval para hacer un OBservable super facil
  retonarIntervalo(): Observable <number> {

    return  interval(100)
    .pipe(
    /*   take(10), */ //se utiliza para definir hasta donde llegar  
      map(valor => valor + 1 ) ,  // recibe el valor del argumento padre (Interval)
      filter(valor => ( valor % 2 === 0)? true: false ), //filtra los valores hasta que se complete el obsevable
          
    )

  }


  retornaobservable(): Observable <number>{

    let i= -1;

    //Creacion de un Observable
    return new Observable <number>( observer =>{
  
  
     const intervalo =  setInterval( () => {
        
        //next emitimos el valor
        i++;
        observer.next(i);
  
        if( i === 4){
          clearInterval(intervalo);
          observer.complete();
        }
        if(i===2){
          observer.error('I llego al valor de 2');
        }
  
      }, 1000)
      
        });
      
  }



}
