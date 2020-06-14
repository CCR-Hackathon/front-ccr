import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Message } from '../models/message.model';

@Injectable()
export class MessageService {

    _url = "http://meu-amigo-caminhoneiro.mybluemix.net";

    constructor(private http: HttpClient) {
    }


    sendMessage(mensagem: Message) {
        return new Observable(observer => {
              this.http.post(this._url + '/sendMessage', {mensagem}).subscribe(
                data => {
                  observer.next(data);
                },
                error => {
                  let message = (error.error && error.error.message) ? error.error.message : 'No more details provided by backend';
                  observer.error(`Error creating stimulum: ${error.message}. Details: ${message}`);
                });

        });
    }

      
}