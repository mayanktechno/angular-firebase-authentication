import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PATTERN } from 'src/app/constant/pattern';
import { VALIDATION_CRITERIA } from 'src/app/constant/validation-criteria';
import { VALIDATION_ERROR_MSG } from 'src/app/constant/validation-error-msg';
import { ForgotPasswordService } from './forgot-password.service';
import { LoaderService } from '../../layout/shared/service/loader.service';
import { ToastService } from '../../layout/toast/toast.service';
import { ACCOUNT, LOGIN } from 'src/app/constant/routes';
import { Router } from '@angular/router';
import { GoogleAuthService } from '../../layout/shared/service/google-auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  FORGET_ERROR = VALIDATION_ERROR_MSG;
  forgetForm : FormGroup
  myerr: boolean;
  erro: any;
  constructor(private _fb :FormBuilder,
    private _forgotPassword : ForgotPasswordService,
    private _loaderService : LoaderService,
    private _toasterService :ToastService,
    private _router :Router,
    private _afAuth : GoogleAuthService) { }

  ngOnInit() {

    this.forgetForm = this._fb.group({
      email: ['', [Validators.pattern(PATTERN.email),
                    Validators.required,
                    Validators.maxLength(VALIDATION_CRITERIA.emailMaxLength)]],
    })

  }

  getControl(control) {
    return this.forgetForm.controls[control];
  }

  forget(){

    this.myerr = false
    console.log('hyyyyyyyyyyy');
    //  this.forgetForm.disable();
    console.log(this.forgetForm.valid);
    if(this.forgetForm.valid){
      this.myerr = true;
      this.forgetForm.disable();
      console.log('byyyyyyyyyy')
    
        this._afAuth.forgetPasswordAuth(this.forgetForm.value.email).then(res=>{
          console.log(res);
          this._toasterService.success('Password change mail has been sent ...!!',5000)
        },(err=>{
          console.log(err);
          this.forgetForm.enable();
          this._toasterService.success(err.message,5000);
        }));
    
      // this._forgotPassword.sendEmail(this.forgetForm.value).subscribe(res=>{
      //   this.forgetForm.disabled;
      //   console.log(res);
      // this.erro = res['message'];
      //   setTimeout(function () {
      //     document.getElementById('msgerr').innerHTML = '';
      //   }, 3000);
      
      // // this._toasterService.success(res['message'],5000)
      //     this._loaderService.loader.next(false);
          
      //   // this._router.navigate([`${ACCOUNT}/${LOGIN}`])
      // },(err=>{
      //     this.myerr = true;
      //     this.forgetForm.enable();
      //   this._toasterService.success
      //     this.erro = err.error.message;
      //     console.log(this.erro, 'fsdffefefeerrer');
      //     setTimeout(function () {
      //       document.getElementById('msgerr').innerHTML = '';
      //     }, 3000);
      //     this._loaderService.loader.next(false);
      //     this.myerr = false;
      // }))
    }
  }

  loginNavigate() {
    this.forgetForm.disable();
    this._router.navigate([`${ACCOUNT}/${LOGIN}`])
  }

}
