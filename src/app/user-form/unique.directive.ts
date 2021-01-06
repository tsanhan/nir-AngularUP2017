import { Directive, forwardRef } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appUnique]',
  providers: [ // extending angular: register this directive as pert of angular core validators
    {
      // extend validators
      provide: NG_VALIDATORS,

      // forwardRef: avoid hoisting issue (the directive was declared before it was used)
      useExisting: forwardRef(() =>UniqueDirective),

      // is 'multi' because I adding this to exsisting set of validators
      multi: true
    }
  ]
})
export class UniqueDirective implements Validator {

  constructor() { }
  validate(control: AbstractControl): ValidationErrors {
    const db = ['nir@nir.com'];

    if (db.indexOf(control.value) !== -1) {
      return { unique: false }
    }

    return null;
  }


}
