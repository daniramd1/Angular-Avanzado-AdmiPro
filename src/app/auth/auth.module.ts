import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//router y forms
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';




@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent

  ],
  exports: [
    LoginComponent,
    RegisterComponent

  ],
  imports: [
    CommonModule,
   RouterModule, 
   FormsModule
  ]
})
export class AuthModule { }
