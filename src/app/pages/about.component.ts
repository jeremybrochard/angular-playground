import { Component } from '@angular/core';
import { ContactFormComponent } from '../components/contact-form/contact-form.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [ContactFormComponent],
  template: `
    <div class="flex flex-row gap-16 my-20">
      <p>This is about page!</p>
      <app-contact-form />
    </div>
  `,
  styles: ``,
})
export class AboutComponent {}
