import { Component } from '@angular/core';
import { User } from '../app.interfaces';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css'],
})
export class TemplateFormComponent {
  // Component name
  componentName = 'Template Form Component';

  users: User[] = [];
  userIdCounter = 1;

  onSubmit(form: any) {
    const formValue = form.value;
    const newUser: User = {
      id: this.userIdCounter++,
      name: {
        first: formValue.first,
        last: formValue.last,
      },
      age: formValue.age,
    };
    this.users.push(newUser);
    form.reset(); // Reset the form after submission
  }
}
