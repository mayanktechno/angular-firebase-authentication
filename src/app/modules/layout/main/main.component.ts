import { Component, OnInit } from '@angular/core';
import { MainService } from './main.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {


  cities = [
    { name: "DELHI", viewValue: "Delhi" },
    { name: "MUMBAI", viewValue: "Mumbai" },
    { name: "JAIPUR", viewValue: "Jaipur" },
    { name: "BANMGLORE", viewValue: "Banglore" },
  ];
  
  
 imgData;
  imgData1;
  imgData2;
  imgData3;

  constructor(private _mainService: MainService,
    private _router : Router) { }

  ngOnInit() {
    this.getJsonData();
    // this.getHealthData();
    // this.getMassageData();
  }

  getJsonData() {
    this._mainService.getDataJson().subscribe(res => {
      console.log(res);
      this.imgData = res;
    })
  }

  product(id){
      this._router.navigate(['product',id]);
  }

  // getHealthData() {
  //   this._mainService.getDataHealth().subscribe(res => {
  //     console.log(typeof (res), res);
  //     this.imgData.concat(res);

  //   })
  // }

  // getMassageData(){
  //   this._mainService.getDataMassage().subscribe(res => {
  //     console.log(res);
  //     this.imgData.concat(res);
  //     console.log(this.imgData,"uhjijijiji");
  //   })
  // }

}
