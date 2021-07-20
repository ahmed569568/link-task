import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-burger-button',
  templateUrl: './burger-button.component.html',
  styleUrls: ['./burger-button.component.scss'],
})
export class BurgerButtonComponent {
  @Input() menuStatus: boolean = false;
  @Output() toggle: EventEmitter<any> = new EventEmitter();

  constructor() {}
}
