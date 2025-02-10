import { Component, Input } from '@angular/core';
import { User } from '../app.interfaces';

@Component({
  selector: 'app-simple-table-null',
  templateUrl: './simple-table-null.component.html',
  styleUrls: ['./simple-table-null.component.css'],
})
export class SimpleTableNullComponent {
  componentName = 'Simple Table Null Component';
  @Input() userData: User[] = [];
}
