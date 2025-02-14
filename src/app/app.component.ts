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
    { text: 'Welcome', path: 'bind-examples/welcome' },
    { text: 'My Hello', path: 'bind-examples/my-hello' },
    { text: 'Two Way Bind', path: 'bind-examples/two-way-bind' },
    { text: 'Event Bind', path: 'bind-examples/event-bind' },
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
