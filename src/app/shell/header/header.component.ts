import { MessageService } from './../../services/message.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public menuStatus: boolean;

  constructor(private messageService: MessageService) {}

  ngOnInit() {}

  toggle(status: boolean) {
    this.menuStatus = status;
    this.messageService.toggleMenu(status);
  }
}
