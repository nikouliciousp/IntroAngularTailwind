import { Component } from '@angular/core';
import { User } from '../app.interfaces';

@Component({
  selector: 'app-comp-input',
  templateUrl: './comp-input.component.html',
  styleUrls: ['./comp-input.component.css'],
})
export class CompInputComponent {
  // Component name
  componentName = 'Comp Input Component';

  userData: User[] = [
    { id: 1, name: { first: 'John', last: 'Doe' }, age: 25 },
    { id: 2, name: { first: 'Jane', last: 'Doe' }, age: 30 },
    { id: 3, name: { first: 'Emily', last: 'Jones' }, age: 40 },
    { id: 4, name: { first: 'James', last: 'Smith' }, age: 35 },
    { id: 5, name: { first: 'Michael', last: 'Brown' }, age: 45 },
  ];

  onDeleteUser(index: number) {
    console.log(index);
    this.userData.splice(index, 1);
  }
}
export { User };
