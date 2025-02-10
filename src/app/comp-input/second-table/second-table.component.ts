import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../comp-input.component';

@Component({
  selector: 'app-second-table',
  templateUrl: './second-table.component.html',
  styleUrls: ['./second-table.component.css'],
})
export class SecondTableComponent {
  // Compomemt Name
  componentName = 'Second Table Component';

  @Input() userData: User[] = [];
  @Output() deleteUser = new EventEmitter<number>();
  @Output() sendUser = new EventEmitter<User>();

  onDeleteUser(i: number) {
    this.deleteUser.emit(i);
  }

  onSendUser(user: User) {
    this.sendUser.emit(user);
  }
}
