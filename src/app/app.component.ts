import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nir-AngularUP2017';
  /**
   *   AbstractControl
   *   /     |      \
   * Form   Form    Form
   * Group  Control Array
   *
   * Form Control Instrance => FormControl Directive => Form Element (DOM)
   *
   *
   */

  constructor() {


  }

}
