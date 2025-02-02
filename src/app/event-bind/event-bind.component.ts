import { Component } from '@angular/core';

@Component({
  selector: 'app-event-bind',
  templateUrl: './event-bind.component.html',
  styleUrls: ['./event-bind.component.css'],
})
export class EventBindComponent {
  // Component name
  componentName = 'EventBindComponent';

  // Click counter
  times = 0;

  // Method to handle button click
  onButtonClick() {
    this.times++;
    console.log('Clicked ' + this.times + ' times!');
  }

  // Method to reset click counter
  onResetClick() {
    this.times = 0;
  }
}
