import { Injectable, NgZone } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {tap,catchError} from 'rxjs/operators';
import { Router } from '@angular/router';

import { environment } from '../../environments/environment';

import { RegisterForm } from '../interfaces/register-form-interfaces';
import { loginForm } from '../interfaces/login-form-interfaces';
import { map, Observable, of } from 'rxjs';


const base_url = environment.base_url;

declare const gapi: any;

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  public auth2 : any;

  constructor( private http: HttpClient,
                private router: Router,
                private ngZone : NgZone) {

                  this.googleInit();
                 }

googleInit(){
  gapi.load('auth2', () =>{
  
    this.auth2 = gapi.auth2.init({
      client_id: '341389685652-aepv56ldcmevih5t3nr0f7fcfh57k8in.apps.googleusercontent.com',
      cookiepolicy: 'single_host_origin',
 
    });
   
  });
}

logout(){
  localStorage.removeItem('token');
 

  this.auth2.signOut().then( () => {
    this.ngZone.run(()=> {
      
      this.router.navigateByUrl('/login');
    })
    
  });
}

validarToken(): Observable<boolean>{
  const token = localStorage.getItem('token') || '';

  return this.http.get( `${base_url}/login/renew`,{
    headers:{
      'x-token': token
    }
  }).pipe(
    tap((resp : any) =>{
      localStorage.setItem('token',resp.token)
    }),
    map(resp => true),
    catchError(error => of(false))
  );
}



  crearUsuario (formData: RegisterForm){
    console.log('creando usuario');

   return  this.http.post( `${base_url}/usuarios`,formData)//se manda el url y la data
                       .pipe(
                        tap( (resp: any) => {
                          localStorage.setItem('token',resp.token)
                        } )
                      )
  }

  login (formData: loginForm){
    console.log('creando usuario');

   return  this.http.post( `${base_url}/login`,formData)//se manda el url y la data
                     .pipe(
                       tap( (resp: any) => {
                         localStorage.setItem('token',resp.token)
                       } )
                     )
  }

  loginGoogle (token: any){
    console.log('creando usuario');

   return  this.http.post( `${base_url}/login/google`,{token})//se manda el url y la data
                     .pipe(
                       tap( (resp: any) => {
                         localStorage.setItem('token',resp.token)
                       } )
                     )
  }

}
