import { Component } from '@angular/core';

@Component({
  selector: 'app-two-way-bind',
  templateUrl: './two-way-bind.component.html',
  styleUrls: ['./two-way-bind.component.css'],
})
export class TwoWayBindComponent {
  // Component name
  componentName = 'Two Way Bind Component';

  // User input
  userInput = '';
}
