import { ValidatorFn, ValidationErrors, AbstractControl } from "@angular/forms";


export function numberValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const number = parseInt(control.value);

    if (!/^\d+$/.test(control.value)) {
      control.setValue(1);
    } else if (isNaN(number)) {
      control.setValue(1);
    } else if (number < 0) {
      control.setValue(1);
    }

    return null;
  };
}