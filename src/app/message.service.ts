import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: string[] = [];

  constructor() { }

  add(message: string): void {
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
