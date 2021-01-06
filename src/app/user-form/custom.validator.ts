import { FormControl } from '@angular/forms';


export class Custom {

  static unique(control: FormControl) {
    const db = ['nir@nir.com'];

    if (db.indexOf(control.value) !== -1) {
      return { unique: false }
    }

    return null;
  }
  static asyncUnique(control: FormControl) {
    const db = ['nir@nir.com'];

    return new Promise(resolve => {
      setTimeout(() => {
        if (db.indexOf(control.value) !== -1) {
          resolve({ unique: false })
        }

        return resolve(null);
      }, 4000)
    })
  }
}
