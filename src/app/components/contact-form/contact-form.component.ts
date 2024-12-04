import { CommonModule, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { FakeAsyncDirective } from '../../core/validators/fake-async.directive';
import { ForbiddenNameDirective } from '../../core/validators/forbidden-name.directive';

export interface ContactForm {
  firstName: string;
  lastName: string;
  email: string;
  description: string;
}

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, FormsModule, JsonPipe, ForbiddenNameDirective, FakeAsyncDirective],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {
  readonly forbiddenName = 'Toto';

  firstName = '';
  lastName = '';
  email = '';
  description = '';
  result: ContactForm | null = null;

  isInvalid(control: NgModel): boolean | null {
    return control && control.invalid && (control.dirty || control.touched)
  }

  submitForm(form: NgForm): void {
    this.markFormAsDirty(form);

    if (form.valid) {
      this.result = { ...form.value } as ContactForm;
    }
  }

  private markFormAsDirty(form: NgForm): void {
    if (form) {
      form.controls['firstName'].markAsDirty();
      form.controls['lastName'].markAsDirty();
      form.controls['email'].markAsDirty();
      form.controls['description'].markAsDirty();
    }
  }
}
