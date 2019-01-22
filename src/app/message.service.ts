import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private messages: string[] = [];
  // EventEmitter
  private messagePublishEvent: EventEmitter<any> = new EventEmitter();

  constructor() {}

  publishMessage(message: string) {
    this.messagePublishEvent.emit(message);
  }

  getMessageEmmiter(): EventEmitter<string> {
    return this.messagePublishEvent;
  }

  add(message: string): void {
    this.publishMessage(message);
    this.messages.push(message);
  }

  clear(): void {
    this.messages = [];
  }

  getLastMessage(): string {
    if (this.messages.length = 0) {
      return '';
    }
    return this.messages[this.messages.length - 1];
  }
}
