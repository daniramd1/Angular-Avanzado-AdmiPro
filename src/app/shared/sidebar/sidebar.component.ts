import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit {

  menuItems: any[];

  constructor( private SidebarService: SidebarService,
                private usuaioService: UsuarioService) {
    this.menuItems =SidebarService.menu;
   }

  ngOnInit(): void {
  }

  logout(){
    this.usuaioService.logout();
  }

}
