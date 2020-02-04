import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PATTERN } from 'src/app/constant/pattern';
import { VALIDATION_CRITERIA } from 'src/app/constant/validation-criteria';
import { VALIDATION_ERROR_MSG } from 'src/app/constant/validation-error-msg';
import { SignupService } from './signup.service';
import { Router } from '@angular/router';
import { ACCOUNT, LOGIN } from 'src/app/constant/routes';
import { ToastService } from '../../layout/toast/toast.service';
import { LoaderService } from '../../layout/shared/service/loader.service';
import { trimData } from 'src/app/constant/reusable-method';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  SIGNUP_ERROR = VALIDATION_ERROR_MSG;
  hide=true;
  signupForm :  FormGroup
  erro: any;
  myerr: boolean;


  constructor(private _fb :  FormBuilder,
              private _signUpService : SignupService,
              private _router : Router,
              private _loaderService :LoaderService,
              private _toasterService: ToastService) { }
    
  ngOnInit() {
  this.createSignupForm();
  }

  createSignupForm(){
    this.signupForm = this._fb.group({
        // brandName : ['',Validators.required],
        // brandUrl : [''],
      // Validators.pattern(/^[^-\s`0-9@~][a-zA-Z\s-]+$/)
      first_name: ['', Validators.required],
      last_name : ['',Validators.required],
      middle_name :[''],
      phone_code :['+91'],
      phone_no: ['', [Validators.required, Validators.pattern(/^[0-9]*$/), Validators.minLength(10), Validators.maxLength(10)]],
      address :[''],
      lat: ["28.7041"],
      long: ["77.1025"],
      device_token: ['1234'],
      device_id: ['1234'],
      device_type: ["web"],
        email: ['', [Validators.pattern(PATTERN.email),
        Validators.required,
        Validators.maxLength(VALIDATION_CRITERIA.emailMaxLength)]],
        password: ['', [Validators.pattern(PATTERN.password),
        Validators.required,
        Validators.minLength(VALIDATION_CRITERIA.passwordMinLength),
        Validators.maxLength(VALIDATION_CRITERIA.passwordMaxLength)]],
      confirm_password:['',Validators.required]  
    })
  }

  getControl(control) {
    return this.signupForm.controls[control];
  }

  
  signup(){
    console.log(this.signupForm.value ,"sdfdfdfdfdfdfdfsdsfsdf");

    if(this.signupForm.valid){
      this.signupForm.disable();
      trimData(this.signupForm.value);
      console.log(this.signupForm.value)
      // if (this.signupForm.value.phone_no.toString().length > 10 || this.signupForm.value.phone_no.toString().length < 10) {
      //   this._toasterService.success('phone no should be of 10 digit only', 5000);
      // }
      if(this.signupForm.value.password !== this.signupForm.value.confirm_password){
        this.erro = "password & confirm password not match";
        setTimeout(function () {
          document.getElementById('msgerr').innerHTML = ''
        }, 3000)
        
      }
      else{
        this.myerr = false
        delete this.signupForm.value.confirm_password;
        console.log(this.signupForm.value);
        this._signUpService.registerUser(this.signupForm.value).subscribe(res=>{
          this._loaderService.loader.next(false);
        console.log(res);    
        this._toasterService.success('signUp success', 3000);
        this._router.navigate([`${ACCOUNT}/${LOGIN}`])
      },(err => {
        console.log(err);
            this.myerr = true;

        this._loaderService.loader.next(false);
        this.signupForm.enable();
        this.erro = err.error.message;
        console.log(this.erro,'fsdffefefeerrer');
        setTimeout(function () {
          document.getElementById('msgerr').innerHTML = '';
        }, 3000);

            this.signupForm.controls.email.setValue('');
            this.signupForm.controls.email.setErrors({ 'incorrect': true });
        // this._toasterService.success(err.error.message, 10000);
      }))
    }
    }
    // this.signupForm.enable();

    
  }

  loginNavigate(){
    this.signupForm.disabled;
    this._router.navigate([`${ACCOUNT}/${LOGIN}`])
  }

}
