import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reusable-form',
  templateUrl: './reusable-form.component.html',
  styleUrls: ['./reusable-form.component.css']
})
export class ReusableFormComponent implements OnInit {

  cities = [
    { name: "DELHI", viewValue: "Delhi" },
    { name: "MUMBAI", viewValue: "Mumbai" },
    { name: "JAIPUR", viewValue: "Jaipur" },
    { name: "BANMGLORE", viewValue: "Banglore" },
  ];
  constructor() { }

  ngOnInit() {
  }

}
