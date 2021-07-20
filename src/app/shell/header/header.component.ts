import { Component } from '@angular/core';
import { LayoutService } from '@app/@shared/services/layout.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private layoutService: LayoutService) {}

  ngOnInit() {}

  toggle(status: boolean) {
    this.layoutService.toggleMenu(status);
  }
}
