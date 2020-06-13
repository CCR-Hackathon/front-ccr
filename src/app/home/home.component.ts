import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  msgPortal = ' Bem-vindo ao portal Meu amigo caminhoneiro!'
  descriptionPortal = 'Aqui você poderá receber alertas, obter dados e se comunicar com as rodovias CCR'
  descriptionConfluence = 'Acesse o tutorial de utilização do portal!'
  version = environment.version

  constructor() { }

  ngOnInit() {
  }

}
