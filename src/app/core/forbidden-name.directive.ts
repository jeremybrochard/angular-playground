import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { forbiddenNameValidator } from './forbidden-name-validator';

@Directive({
  selector: '[appForbiddenName]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: ForbiddenNameDirective, multi: true }
  ],
  standalone: true
})
export class ForbiddenNameDirective implements Validator {
  @Input('appForbiddenName') forbiddenName = '';

  validate(control: AbstractControl): ValidationErrors | null {
    return this.forbiddenName ? forbiddenNameValidator(this.forbiddenName)(control) : null;
  }

}
