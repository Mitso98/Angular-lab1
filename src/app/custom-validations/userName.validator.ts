import { AbstractControl } from '@angular/forms';

export function ForbiddenNameValidator(control: AbstractControl) {
  const forbidden = /^[a-zA-Z]+$/.test(control.value);

  return forbidden ? null : { forbiddenName: { value: control.value } };
}
