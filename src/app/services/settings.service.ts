import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  public linkcolor = document.querySelector('#theme');



  constructor() { 

     // aqui estoy obteniendo el tema del color que se subio en el account settings y || es una direccion por defecto
 const url = localStorage.getItem('temacolor') ||  './assets/css/colors/default-dark.css';
 // cambiamos la url del index para que se cambie el tema asi:
  this.linkcolor?.setAttribute('href',url);

    console.log("servicio settings listo para usar!")
  }
  
  cambiarcolor( temacolor : string){

    const url = `./assets/css/colors/${temacolor}.css`;

    // cambiamos la url del index para que se cambie el tema asi:
        this.linkcolor?.setAttribute('href',url);
    //para grabar el tema en una memoria en la memoria local:
    localStorage.setItem('temacolor',url);
  
    this.ponerflechita();

  }

  ponerflechita (){
    const linksdeflechita= document.querySelectorAll('.selector');

    //es una lista de elementos html asi que el foreach nos ayuda a barrer cada uno de ellos
 linksdeflechita.forEach(elem =>{
  //removemos la clase working en caso de que algun cuadrito lo tenga:
  elem.classList.remove('working');
  //checamos que atributo tiene cada cuadro mediante un clase que ya tienen llamada datatheme (recuerden que estamos dentro de la lista)
  const temadelcuadro = elem.getAttribute('data-theme');
  //aqui le pasamos a la variable la url con el tema que tiene cada cuadro
  const urldeltema = `./assets/css/colors/${temadelcuadro}.css`;
  const obtenertemalocal = this.linkcolor?.getAttribute('href');
  if (urldeltema == obtenertemalocal )
  {
     //si son iguales solo se le agrega la clase working
     elem.classList.add('working');
  }
});
}
}
