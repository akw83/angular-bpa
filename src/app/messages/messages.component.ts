import { Component, OnInit, OnDestroy } from '@angular/core';

import { MessageService } from '../message.service';
import { timeout } from 'rxjs/operators';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})

export class MessagesComponent implements OnInit {
  staticAlertClose = false;
  messageToast: string;

  // public couse we bind it to the template
  constructor(public messageService: MessageService) { }

  ngOnInit() {
    // message EventEmmiter subscribe
    this.messageService.getMessageEmmiter().subscribe((message) => {
      this.messageToast = message;
      setTimeout(() => this.messageToast = null, 3000);
    });
  }
}
