import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GeoLocation } from '../models/geolocation.model';

@Injectable()
export class AlertService {

    _url = "http://meu-amigo-caminhoneiro.mybluemix.net";

    constructor(private http: HttpClient) {
    }
    // getLocation(): Observable<GeoLocation[]> {
    //      return this.http.get<GeoLocation[]>(this.url + '/getCoord').pipe()
    //   }

    getLocation(): Observable<GeoLocation[]> {
        return new Observable<GeoLocation[]>(observer => {
              this.http.get<GeoLocation[]>(this._url + '/getCoord').subscribe(
                data => {
                  observer.next(data);
                  console.log(data)
                },
                error => {
                  let message = (error.error && error.error.message) ? error.error.message : 'No more details provided by backend';
                  observer.error(`Error fetching stimulus: ${error.message}. Details: ${message}`);
                });

        });
    }

      
}