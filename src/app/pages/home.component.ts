import { Component } from '@angular/core';
import { CounterComponent } from '../components/counter/counter.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CounterComponent],
  template: `
    <p class="my-6">This is the home page!</p>
    <app-counter/>
  `,
  styles: ``,
})
export class HomeComponent {}
