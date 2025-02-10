import { Component, ViewChild } from '@angular/core';
import { User } from '../app.interfaces';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css'],
})
export class TemplateFormComponent {
  // Component name
  componentName = 'Template Form Component';

  @ViewChild(NgForm) form!: NgForm;
  users: User[] = [];
  userIdCounter = 1;

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return; // Αν η φόρμα δεν είναι έγκυρη, δεν κάνουμε τίποτα
    }

    const formValue = form.value;

    // Έλεγχος για κενές τιμές
    if (!formValue.first?.trim() || !formValue.last?.trim() || !formValue.age) {
      return;
    }

    const newUser: User = {
      id: this.userIdCounter++,
      name: {
        first: formValue.first.trim(),
        last: formValue.last.trim(),
      },
      age: formValue.age,
    };

    this.users.push(newUser);

    form.resetForm(); // Reset φόρμας
  }
}
