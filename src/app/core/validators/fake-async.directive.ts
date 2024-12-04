import { Directive, forwardRef } from '@angular/core';
import { AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors } from '@angular/forms';
import { fakeAsyncValidator } from './fake-async-validator';

@Directive({
  selector: '[appFakeAsync]',
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: forwardRef(() => FakeAsyncDirective),
      multi: true
    }
  ],
  standalone: true
})
export class FakeAsyncDirective implements AsyncValidator {

  validate(control: AbstractControl): Promise<ValidationErrors | null> {
    return fakeAsyncValidator(control);
  }

}
