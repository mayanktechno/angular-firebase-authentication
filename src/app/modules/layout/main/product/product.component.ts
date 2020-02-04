import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  itemId: any;
  myarr: any[];
  productDetail: any;
  bgImg: any;

  constructor(private _mainService :  MainService,
    private _route : ActivatedRoute) { }

  ngOnInit() {
      this._route.params.subscribe(val=>{
        console.log(val);
        this.itemId =  val.id;
      })
      this._mainService.getDataJson().subscribe(response=>{
        console.log(response);

        for(const property in response){
          console.log(response[property]);
          this.myarr = [...response[property]];
          response[property].forEach(data=>{
            if(data.id == this.itemId){
              console.log(data);
              this.productDetail = data;
              this.bgImg = this.productDetail.bgImg;
              console.log(typeof(this.bgImg));
              console.log(this.productDetail.bgImg,"jhijijiji");
         
            }
          })
        }
    })
  }
  getBackgroundUrl(){
    return `url(${this.bgImg})`;
  }
  
}
