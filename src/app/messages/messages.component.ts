import { Component, OnInit } from '@angular/core';
import { MessageService } from '../services/message.service';
import { Message } from '../models/message.model';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  message: Message;

  constructor(private messageService: MessageService) { }

  ngOnInit() {
  }

  submit() { 
    this.messageService.sendMessage(this.message)
    .subscribe((res: Message) => {
      let response = res as any;
      alert('Mensagem enviada com sucesso!')
      this.message = null
      console.log(response)
    }, err => {
      alert(err)
    })
  }

}
