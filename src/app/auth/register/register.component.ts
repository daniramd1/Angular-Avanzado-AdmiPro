import { Component} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2'

import { UsuarioService } from '../../services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {

  public formSubmitted = false;

  public registerForm = this.fb.group({  //se define el formulario ya dentro van los datos por defectos

    nombre: ['Daniel Radilla',[Validators.required, Validators.minLength(3)]],
    email: ['test100@hotmail.com',[Validators.required, Validators.email]],
    password: ['123456',[Validators.required, Validators.minLength(5)]],
    password2: ['123456',[Validators.required, Validators.minLength(5)]],
    terminos: [true,[Validators.required]],

  },{ //validaciones
   validators: this.passwordsIguales('password','password2')
  });


  constructor(private fb: FormBuilder,
              private usuarioService : UsuarioService,
              private router: Router) { }

    crearUsuario(){
      this.formSubmitted = true;
      console.log(this.registerForm.value);

      if(this.registerForm.invalid){
        return;
      }

      //Si es valido el usuario Realizar posteo
      this.usuarioService.crearUsuario(this.registerForm.value)
      .subscribe(resp => {
        console.log('Usuario Creado');
           //mover al dashboard
           this.router.navigateByUrl('/');  
      },(err) => {
        //si sucede un error
        Swal.fire('Error',err.error.msg, 'error'); //nombbre mensaje , el error del formulario, y el estilo del icono(error)
      } );

    }

    campoNoValido( campo: string): boolean{
      
      if(this.registerForm.get(campo)?.invalid && this.formSubmitted) //obtengo el campo y del formulario y pregunto si es invalido a lo que mete el  usuario y si ya mandaron el formulario
      {
        return true; // asi traemos el error
      }else{
        return false;
        }
    }

    contrasenasNoValidas(){
      const pass1 = this.registerForm.get('password')?.value;
      const pass2 = this.registerForm.get('password2')?.value;

      if((pass1 !== pass2) && this.formSubmitted){ //sin las contras son diferentes y ya se hizo summit entonces se manda error
        return true;   
      }else{
          return false;
      }
    }

    aceptaTerminos(){
      return !this.registerForm.get('terminos')?.value && this.formSubmitted;
    }

    passwordsIguales(pass1Name : string, pass2Name: string){
        
      return ( formGroup : FormGroup)=>{
         
        const pass1Control = formGroup.get(pass1Name);  
        const pass2Control = formGroup.get(pass2Name);  
        
        if(pass1Control?.value === pass2Control?.value){
          pass2Control?.setErrors(null)
        }else{
          pass2Control?.setErrors({noEsIgual: true})
        }
      }
    }
  
}
