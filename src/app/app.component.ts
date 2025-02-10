import { Component } from '@angular/core';
import { SideBar } from './app.interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular Intro Examples';

  sideBarMenu: SideBar[] = [
    { text: 'Welcome', path: 'welcome' },
    { text: 'My Hello', path: 'my-hello' },
    { text: 'Two Way Bind', path: 'two-way-bind' },
    { text: 'Event Bind', path: 'event-bind' },
    { text: 'Structural Directives', path: 'structural-directives' },
    { text: 'Templates Variables', path: 'templates-variables' },
    { text: 'Template Form', path: 'template-form' },
    { text: 'Comp Input', path: 'comp-input' },
    { text: 'Reactive Forms', path: 'reactive-forms' },
    { text: 'Chuck Norris', path: 'chuck-norris' },
  ];

  currentPath = '';

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      console.log(this.router.url.substring(1));
      this.currentPath = this.router.url.substring(1);
    });
  }
}
