import { Component, OnInit, ChangeDetectorRef, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { LOGIN, ACCOUNT, BECOME_PROFESSIONAL, ABOUT, USER_PROFILE } from '../../../../../app/constant/routes';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
isEnable = false;
  token;
  body = {
    device_id :"1234",
    device_type:"web"
  }
  constructor(private router : Router,
    private _http: HttpClient) { }

  ngOnInit() {
    if(localStorage.getItem('authorisation')){
      this.token = localStorage.getItem('authorisation');
    }
    else{
      this.token = localStorage.getItem('social-auth');
    }
  }
  navigateLogin(){
    this.router.navigate([`${ACCOUNT}/${LOGIN}`]);
  }

  navigateProfile(){
    this.router.navigate([`${USER_PROFILE}`]);
  }
  
  logout(){
   this.isEnable = true;

   if(localStorage.getItem('social-auth')){
     localStorage.removeItem('social-auth');
     this.token = '';
   }
  else{
  this._http.post(`${environment.url}user/logout`,this.body).subscribe(res=>{
    if(res){
      console.log(res);
      localStorage.removeItem('authorisation');
      this.token = '';
      console.log(this.token);
    }
  },(err=>{
    this.isEnable = false;
  }))
}
 }
  mainPageRouting(){
    this.router.navigate(['']);
  }

  navigateAbout(){
    this.router.navigate([ABOUT]);
  }

  navigateBecome(){
    this.router.navigate([BECOME_PROFESSIONAL])
  }
}
