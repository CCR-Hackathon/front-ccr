import { Component, OnInit } from '@angular/core';
import {environment} from '../../environments/environment'

import * as Mapboxgl from 'mapbox-gl';
import { AlertService } from '../services/alerts.service';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss']
})
export class AlertsComponent implements OnInit {

  constructor(private alertService: AlertService) { }

  coords = []
  errorMsg: string;

  ngOnInit() { 

    this.alertService.getLocation().subscribe(
        data => {
          this.coords = data;
          console.log(data)
        },
        error => this.errorMsg = error
      ); 

    var mapa: Mapboxgl.Map;
    
    Mapboxgl.accessToken = environment.mapBoxKey;

    mapa = new Mapboxgl.Map({
      container: 'mapa-mapbox', // container id
      style: 'mapbox://styles/juniormag2/cjfajg44u5qya2rnz1e3v19s3',
      center: [-47.8294755, -20.4188716], // starting position
      zoom: 13 // starting zoom
    });

      var size = 200;
  
      // implementation of CustomLayerInterface to draw a pulsing dot icon on the map
      // see https://docs.mapbox.com/mapbox-gl-js/api/#customlayerinterface for more info
      var pulsingDot = {
          width: size,
          height: size,
          data: new Uint8Array(size * size * 4),
  
          // get rendering context for the map canvas when layer is added to the map
          onAdd: function() {
              var canvas = document.createElement('canvas');
              canvas.width = this.width;
              canvas.height = this.height;
              this.context = canvas.getContext('2d');
          },
  
          // called once before every frame where the icon will be used
          render: function() {
              var duration = 1000;
              var t = (performance.now() % duration) / duration;
  
              var radius = (size / 2) * 0.3;
              var outerRadius = (size / 2) * 0.7 * t + radius;
              var context = this.context;
  
              // draw outer circle
              context.clearRect(0, 0, this.width, this.height);
              context.beginPath();
              context.arc(
                  this.width / 2,
                  this.height / 2,
                  outerRadius,
                  0,
                  Math.PI * 2
              );
              context.fillStyle = 'rgba(255, 200, 200,' + (1 - t) + ')';
              context.fill();
  
              // draw inner circle
              context.beginPath();
              context.arc(
                  this.width / 2,
                  this.height / 2,
                  radius,
                  0,
                  Math.PI * 2
              );
              context.fillStyle = 'rgba(255, 100, 100, 1)';
              context.strokeStyle = 'white';
              context.lineWidth = 2 + 4 * (1 - t);
              context.fill();
              context.stroke();
  
              // update this image's data with data from the canvas
              this.data = context.getImageData(
                  0,
                  0,
                  this.width,
                  this.height
              ).data;
  
              // continuously repaint the map, resulting in the smooth animation of the dot
              mapa.triggerRepaint();
  
              // return `true` to let the map know that the image was updated
              return true;
          }
      };
  
      mapa.on('load', function() {
        mapa.addImage('pulsing-dot', pulsingDot, { pixelRatio: 2 });
  
        mapa.addSource('points', {
              'type': 'geojson',
              'data': {
                  'type': 'FeatureCollection',
                  'features': [
                      {
                          'type': 'Feature',
                          'geometry': {
                              'type': 'Point',
                              'coordinates': [-47.8294755, -20.4188716]
                          }
                      }
                  ]
              }
          });
          mapa.addLayer({
              'id': 'points',
              'type': 'symbol',
              'source': 'points',
              'layout': {
                  'icon-image': 'pulsing-dot'
              }
          });
      });
  }

}
