import { Component } from '@angular/core';

@Component({
  selector: 'app-template-variables',
  templateUrl: './template-variables.component.html',
  styleUrls: ['./template-variables.component.css'],
})
export class TemplateVariablesComponent {
  // Componenr Name
  componentName = 'Template Variables Component';

  log(input: string) {
    console.log(input);
  }

  clearInput(input: HTMLInputElement) {
    input.value = '';
  }
}
