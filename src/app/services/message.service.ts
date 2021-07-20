import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  menuSubject: Subject<boolean> = new Subject<boolean>();
  constructor() {}

  toggleMenu(status: boolean) {
    this.menuSubject.next(status);
  }
}
