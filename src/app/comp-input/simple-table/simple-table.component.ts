import { Component, Input } from '@angular/core';
import { User } from '../comp-input.component';
import { orderBy } from 'lodash-es';

@Component({
  selector: 'app-simple-table',
  templateUrl: './simple-table.component.html',
  styleUrls: ['./simple-table.component.css'],
})
export class SimpleTableComponent {
  // Compomemt Name
  componentName = 'Simple Table Component';

  @Input() userData: User[] = [
    { id: 1, name: { first: 'John', last: 'Doe' }, age: 25 },
    { id: 2, name: { first: 'Jane', last: 'Doe' }, age: 30 },
    { id: 3, name: { first: 'Emily', last: 'Jones' }, age: 40 },
    { id: 4, name: { first: 'James', last: 'Smith' }, age: 35 },

    { id: 5, name: { first: 'Michael', last: 'Brown' }, age: 45 },
  ];

  private initialUserData: User[] = [...this.userData];

  initSort() {
    this.userData = [...this.initialUserData];
  }

  sortByAgeDesc() {
    this.userData = orderBy(this.userData, ['age'], ['desc']);
  }

  sortByAgeAsc() {
    this.userData = orderBy(this.userData, ['age'], ['asc']);
  }
}
