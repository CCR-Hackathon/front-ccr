import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  constructor() {
        this.menu = [
          {
            path: 'home',
            text: 'Home'
          },
          {
            path: 'info',
            text: 'Informações'
          },
          {
            path: 'alerts',
            text: 'Alertas'
          },
          {
            path: 'messages',
            text: 'Mensagens'
          },
          /**{
            path: 'initials-tasks',
            text: 'Aprovação de Contas'
          }**/
        ];
  }

  menu;
  profile: string;

  isCollapsed = true;



  toggle() {
    this.isCollapsed = !this.isCollapsed;
  }

  collapse() {
    this.isCollapsed = true;
  }

  ngOnInit() {

  }
}
