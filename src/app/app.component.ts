import { Component } from '@angular/core';
import { SideBar } from './app.interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular Intro Examples';

  sideBarMenu: SideBar[] = [
    { text: 'My Hello', path: 'my-hello' },
    { text: 'Two Way Bind', path: 'two-way-bind' },
    { text: 'Event Bind', path: 'event-bind' },
    { text: 'Structural Directives', path: 'sructural-directives' },
    { text: 'Templates Variables', path: 'templates-variables' },
    { text: 'Comp Input', path: 'comp-input' },
  ];
}
