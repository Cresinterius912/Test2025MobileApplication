import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {
//These are basic properties that are used in Tab2 in a grid//
  first = "Hello there!";
  second = "Byeeee";

//The below is an object with its own properties//
  person = {
    name:"Shania",
    surname:"Galea",
    age:24
  }

  person2 = {
    name:"Jane",
    surname:"Doe",
    age:123
  }

  constructor() {}



}
