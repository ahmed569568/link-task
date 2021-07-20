import { MessageService } from './../../services/message.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  toggle: boolean;

  constructor(private messageServices: MessageService) {}

  ngOnInit() {
    this.messageServices.menuSubject.subscribe((status: boolean) => (this.toggle = status));
  }
}
