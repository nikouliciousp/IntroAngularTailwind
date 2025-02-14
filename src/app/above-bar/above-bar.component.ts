import { Component, Input } from '@angular/core';
import { SideBar } from '../app.interfaces';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-above-bar',
  templateUrl: './above-bar.component.html',
  styleUrls: ['./above-bar.component.css'],
})
export class AboveBarComponent {
  @Input() menu: SideBar[] = [];
  @Input() subMenu: SideBar[] = [];

  @Input() active = 'welcome';

  onClick(path: string) {
    this.active = path;
  }

  isDropdownOpen = false;

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  closeDropdown() {
    this.isDropdownOpen = false;
  }

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isSubMenuActive();
      }
    });
  }

  isSubMenuActive(): boolean {
    return this.subMenu.some((item) => this.router.isActive(item.path, true));
  }
}
