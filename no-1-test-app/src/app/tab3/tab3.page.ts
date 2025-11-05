import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: false,
})
export class Tab3Page {

  formGroup = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    age: new FormControl()
  });

  firstName="";
  lastName="";
  age="";

  constructor() {}

  submit(){
   this.firstName = this.formGroup.controls.firstName.value; 
   this.lastName = this.formGroup.controls.lastName.value; 
   this.age = this.formGroup.controls.age.value; 
  }
}
