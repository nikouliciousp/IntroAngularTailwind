import { Component, Input } from '@angular/core';
import { SideBar } from '../app.interfaces';

@Component({
  selector: 'app-above-bar',
  templateUrl: './above-bar.component.html',
  styleUrls: ['./above-bar.component.css'],
})
export class AboveBarComponent {
  @Input() menu: SideBar[] = [];

  @Input() active = 'welcome';

  onClick(path: string) {
    this.active = path;
  }
}
