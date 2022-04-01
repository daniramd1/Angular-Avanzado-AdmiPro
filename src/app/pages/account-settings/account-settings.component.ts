import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [
  ]
})
export class AccountSettingsComponent implements OnInit {

  //se jala el url del css que esta en el index
  public linkcolor = document.querySelector('#theme');



  constructor(private SettingsService: SettingsService) { }

  ngOnInit(): void {

    this.SettingsService.ponerflechita();

  }

  cambiarcolor( temacolor : string){

    this.SettingsService.cambiarcolor(temacolor);
  
  }


 

  }



