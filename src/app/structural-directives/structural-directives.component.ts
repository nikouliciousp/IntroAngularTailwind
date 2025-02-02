import { Component } from '@angular/core';
import { LoremIpsum } from 'lorem-ipsum';

// User Interface
interface User {
  id: number;
  name: {
    first: string;
    last: string;
  };
  age: number;
}

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.css'],
})
export class StructuralDirectivesComponent {
  // Component Name
  componentName: string = 'Structural Directives Component';

  paragraph: string = new LoremIpsum().generateParagraphs(1);
  paragraphVisible: boolean = true;

  // Toggle Paragraph
  toggleParagraph() {
    this.paragraphVisible = !this.paragraphVisible;
  }

  // User Data
  userData: User[] = [
    { id: 1, name: { first: 'John', last: 'Doe' }, age: 25 },
    { id: 2, name: { first: 'Jane', last: 'Doe' }, age: 30 },
    { id: 3, name: { first: 'James', last: 'Smith' }, age: 35 },
    { id: 4, name: { first: 'Emily', last: 'Jones' }, age: 40 },
    { id: 5, name: { first: 'Michael', last: 'Brown' }, age: 45 },
  ];
}
