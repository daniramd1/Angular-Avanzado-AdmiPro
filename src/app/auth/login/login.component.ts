import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';
import Swal from 'sweetalert2';


declare const gapi: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {



  public formSubmitted = false;
  public auth2 : any;
  
 
  public loginform = this.fb.group({  //se define el formulario ya dentro van los datos por defectos

    email: [localStorage.getItem('email') || '',[Validators.required, Validators.email]],
    password: ['',[Validators.required, Validators.minLength(5)]],
    remember: [false]
 
  });


  constructor( private router: Router,
                private fb: FormBuilder,
                private usuarioService: UsuarioService,
                private ngZone : NgZone) {    }



 ngOnInit(): void {
  this.renderButton();
 
  }


login(){

this.usuarioService.login(this.loginform.value).
subscribe(resp => {

      if(this.loginform.get('remember')?.value){  // si la persona quiere que recuerden su email (remember)
      localStorage.setItem('email',this.loginform.get('email')?.value);
      }else{
        localStorage.removeItem('email'); 
      }
       //mover al dashboard
       this.router.navigateByUrl('/');  

},(err)=>{
  Swal.fire('Error',err.error.msg, 'error');
}) 

/*    this.router.navigateByUrl('/');
 */ 
}

//Entrar con Google

/*  var id_token = googleUser.getAuthResponse().id_token; */


renderButton() {

  gapi.signin2.render('my-signin2', {
    'scope': 'profile email',
    'width': 240,
    'height': 50,
    'longtitle': true,
    'theme': 'dark',

  });
  this.startApp();
}

startApp() { 
  gapi.load('auth2', () =>{
  
    this.auth2 = gapi.auth2.init({
      client_id: '341389685652-aepv56ldcmevih5t3nr0f7fcfh57k8in.apps.googleusercontent.com',
      cookiepolicy: 'single_host_origin',
 
    });
    this.attachSignin(document.getElementById('my-signin2'));
  });
}

attachSignin(element: any) {
  console.log(element.id);
  this.auth2.attachClickHandler(element, {},
      (googleUser: any) => {
        const id_token = googleUser.getAuthResponse().id_token;
        /* console.log(id_token); */
        this.usuarioService.loginGoogle(id_token).subscribe(resp =>{
             //mover al dashboard
             this.ngZone.run(()=>{

               this.router.navigateByUrl('/');  
             })
        });

     

      }, function(error: any) {
        alert(JSON.stringify(error, undefined, 2));
      });
}

}
