import { Component, OnInit } from '@angular/core';
import {environment} from '../../environments/environment'

import * as Mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss']
})
export class AlertsComponent implements OnInit {

  mapa: Mapboxgl.Map;

  constructor() { }

  ngOnInit() {

    Mapboxgl.accessToken = environment.mapBoxKey;

    this.mapa = new Mapboxgl.Map({
      container: 'mapa-mapbox', // container id
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-46.576213, -23.4539413], // starting position
      zoom: 15.6 // starting zoom
    });
    this.createMarker(-46.576213, -23.4539413);
  }

  createMarker(lng:number, lat: number) {
    const marker = new Mapboxgl.Marker({
      })
      .setLngLat([lng, lat])
      .addTo(this.mapa);
  }

}
