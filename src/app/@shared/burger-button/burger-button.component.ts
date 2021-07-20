import { LayoutService } from '@app/@shared/services/layout.service';
import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-burger-button',
  templateUrl: './burger-button.component.html',
  styleUrls: ['./burger-button.component.scss'],
})
export class BurgerButtonComponent implements OnInit {
  menuStatus: boolean = false;
  @Output() toggle: EventEmitter<any> = new EventEmitter();

  constructor(private layoutService: LayoutService) {}

  ngOnInit() {
    this.layoutService.menuSubject.subscribe((status: boolean) => (this.menuStatus = status));
  }

  toggleButton(status: boolean) {
    this.menuStatus = !this.menuStatus;
    this.toggle.emit(status);
  }
}
