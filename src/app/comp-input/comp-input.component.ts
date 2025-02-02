import { Component } from '@angular/core';

// User Interface
export interface User {
  id: number;
  name: {
    first: string;
    last: string;
  };
  age: number;
}

@Component({
  selector: 'app-comp-input',
  templateUrl: './comp-input.component.html',
  styleUrls: ['./comp-input.component.css'],
})
export class CompInputComponent {
  // Component name
  componentName = 'Comp Input Component';
}
