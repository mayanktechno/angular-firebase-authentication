import { Component, OnInit } from '@angular/core';
import { DataPassService } from '../../shared/service/data-pass.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  userProfileData: object;

  constructor(private _dataPassService : DataPassService,
     ) { }

  ngOnInit() {
     this.gettingData();
    
  }

  gettingData(){
  //  this._dataPassService.dataPass.subscribe(
  //    data => {
  //       console.log(data , 'dnfsdfsdkfsdkfjsdkfsdjkfsdjkfsd')
  //     this.userProfileData = data;
  //    })


  }




}
