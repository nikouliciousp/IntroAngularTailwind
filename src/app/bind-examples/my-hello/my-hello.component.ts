import { Component } from '@angular/core';

@Component({
  selector: 'app-my-hello',
  templateUrl: './my-hello.component.html',
  styleUrls: ['./my-hello.component.css'],
})
export class MyHelloComponent {
  // Component name
  componentName = 'My Hello Component';

  // Image properties
  imageURL = 'https://angular.io/assets/images/logos/angular/angular.png';
  imageALT = 'Angular Logo';
  title = 'Hello Angular!';
  imageTooltip = 'Angular Logo';

  // Button properties
  buttonDisabled = false;
  buttonPrompt = 'Click me!';

  userInput = '';

  // Method to handle user input
  onUserInput(event: Event) {
    const tearget = event.target as HTMLInputElement;
    this.userInput = tearget.value;
    // this.userInput = (event.target as HTMLInputElement).value;
  }

  // Method to reset user input
  onUserInputReset(inputElement: HTMLInputElement) {
    this.userInput = '';
    inputElement.value = '';
  }
}
