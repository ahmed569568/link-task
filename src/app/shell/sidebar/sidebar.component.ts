import { Component, OnInit } from '@angular/core';
import { LayoutService } from '@app/@shared/services/layout.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  toggle: boolean;

  constructor(private layoutService: LayoutService) {}

  ngOnInit() {
    this.layoutService.menuSubject.subscribe((status: boolean) => (this.toggle = status));
  }
}
