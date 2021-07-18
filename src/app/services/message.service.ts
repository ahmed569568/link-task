import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  private subject = new Subject<any>();
  constructor() {}

  sendMessage(show: boolean) {
    this.subject.next(show);
  }
  receivedMessage() {
    return this.subject.asObservable();
  }
}
