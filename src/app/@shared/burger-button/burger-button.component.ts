import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-burger-button',
  templateUrl: './burger-button.component.html',
  styleUrls: ['./burger-button.component.scss'],
})
export class BurgerButtonComponent {
  menuStatus: boolean = false;
  @Output() toggle: EventEmitter<any> = new EventEmitter();

  constructor() {}

  toggleButton(status: boolean) {
    this.menuStatus = !this.menuStatus;
    this.toggle.emit(status);
  }
}
