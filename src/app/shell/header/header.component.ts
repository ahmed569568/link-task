import { MessageService } from './../../services/message.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  menuHidden = true;
  public show: boolean = false;

  constructor(private messageService: MessageService) {}

  ngOnInit() {}

  toggle() {
    this.show = !this.show;
    this.messageService.sendMessage(this.show);
    this.menuHidden = !this.menuHidden;
  }
}
