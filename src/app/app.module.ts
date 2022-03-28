import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


//Rutas

//componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BreadcrumsComponent } from './shared/breadcrums/breadcrums.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { Grafica1Component } from './pages/grafica1/grafica1.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';
import { PagesComponent } from './pages/pages.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    BreadcrumsComponent,
    HeaderComponent,
    SidebarComponent,
    DashboardComponent,
    Grafica1Component,
    ProgressComponent,
    NopagefoundComponent,
    PagesComponent,
    LoginComponent,
    RegisterComponent
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
