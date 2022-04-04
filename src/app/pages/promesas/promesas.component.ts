import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styleUrls: [],
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    this.getUsuarios ().then (usuario =>{
      console.log(usuario);
    });

  /* const promesa = new Promise ( ( resolve, reject ) => {

    if(false){
      resolve ("Todo salio bien");
    }else{
     reject ('Algo salio mal');
    }

  } );

  promesa.then( (mensaje) => {
    console.log(mensaje);  
  });
promesa.catch(error => {
console.log('error en mi promesa',error) 
}); */

  }

 getUsuarios (){
      return new Promise (resolve =>{

      

    fetch ('https://reqres.in/api/users')
    .then(resp => resp.json())
    .then(body => resolve(body.data));

  });
  
  }

}
