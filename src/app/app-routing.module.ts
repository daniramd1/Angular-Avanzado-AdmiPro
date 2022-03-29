import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Modulos
import { PagesRoutingModule } from './pages/pages.routing';
import { AuthRoutingModule } from './auth/auth.routing';

import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';




const routes: Routes = [

// path: dashboarh = pages
  { path: '', redirectTo:'dashboard',pathMatch: 'full' },
  { path: '**', component: NopagefoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes),
            PagesRoutingModule ,
            AuthRoutingModule 
  
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
