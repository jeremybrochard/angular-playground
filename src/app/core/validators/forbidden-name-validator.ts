import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const forbiddenNameValidator = (forbiddenName: string): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors | null => {
    return control && control.value === forbiddenName ? { forbiddenName: true } : null;
  }
}
