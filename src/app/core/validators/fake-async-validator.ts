import { AbstractControl, ValidationErrors } from "@angular/forms";
import { delay, firstValueFrom, map, of } from "rxjs";

export const fakeAsyncValidator = (control: AbstractControl): Promise<ValidationErrors | null> => {
  const source$ = of(null).pipe(delay(5000), map(() => { return { fakeAsync: true }; }));
  return firstValueFrom(source$);
}
