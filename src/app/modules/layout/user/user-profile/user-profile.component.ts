import { Component, OnInit } from '@angular/core';
import { DataPassService } from '../../shared/service/data-pass.service';
import { FirestoreService } from '../../shared/service/firestore.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  userProfileData;

  constructor(private _dataPassService : DataPassService,
    private _fireStoreService : FirestoreService
     ) { }

  ngOnInit() {
     this.gettingData();
    
  }

  gettingData(){
    this._fireStoreService.getDataUser(localStorage.getItem('uid')).valueChanges().subscribe(res=>{
      console.log(res);
      this.userProfileData = res;
    })
  }




}
