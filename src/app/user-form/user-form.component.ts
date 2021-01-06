import { Custom } from './custom.validator';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  public userForn:FormGroup;
  constructor( private fb:FormBuilder ) {
    this.userForn = fb.group({
      name:[null],
      // email:[null, null, Custom.asyncUnique],
      email:null, // no need for validators (appUnique is used)
      size:null,
    })

    this.send()
  }


  public get name(){
    return this.userForn.get('name') as FormControl
  }
  public get email(){
    return this.userForn.get('email') as FormControl
  }

  send() {
    console.log(this.userForn.value);
  }
  reset() {
    this.userForn.reset();
  }

  ngOnInit() {
  }

}
