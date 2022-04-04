import { Component, OnDestroy } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { filter, map, Subscription } from 'rxjs';

@Component({
  selector: 'app-breadcrums',
  templateUrl: './breadcrums.component.html',
  styles: [
  ]
})
export class BreadcrumsComponent implements OnDestroy {


  public titulo : string ="";
  public titulosubs$ : Subscription;

  constructor( private router: Router) {

   this.titulosubs$= this.getArgumentosRuta()
                       .subscribe(({titulo}) =>{
                        console.log(titulo);
                        this.titulo = titulo;
                        document.title =`AdminPro-${titulo}`; //poner titulo a la pagina
                        });
}



ngOnDestroy(): void {
  this.titulosubs$.unsubscribe();
}


  getArgumentosRuta(){

//pasamos la data desde el pagesrouting y se filtran para agarrar el dato
 return this.router.events
    
.pipe(
filter(event => event instanceof  ActivationEnd ),
filter((event: any ) => event.snapshot.firstChild === null),  
map((event: ActivationEnd) => event.snapshot.data),
);
/* .subscribe(({titulo}) =>{

console.log(titulo);
this.titulo = titulo;
document.title =`AdminPro-${titulo}`; //poner titulo a la pagina
}); */
  }
 

}
