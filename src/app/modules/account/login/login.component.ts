import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PATTERN } from 'src/app/constant/pattern';
import { VALIDATION_CRITERIA } from '../../../constant/validation-criteria';
import { VALIDATION_ERROR_MSG } from '../../../constant/validation-error-msg';
import { Router } from '@angular/router';
import { SIGNUP, ACCOUNT, FORGET_PASSWORD } from 'src/app/constant/routes';
import { LoginService } from './login.service';
import { ToastService } from '../../layout/toast/toast.service';
import { LoaderService } from '../../layout/shared/service/loader.service';
import { trimData } from 'src/app/constant/reusable-method';
import { GoogleAuthService } from '../../layout/shared/service/google-auth.service';
import { auth } from 'firebase';
import { DataPassService } from '../../layout/shared/service/data-pass.service';
import { FirestoreService } from '../../layout/shared/service/firestore.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  LOGIN_ERROR = VALIDATION_ERROR_MSG
  hide = true;
  loginForm: FormGroup
  erro: string;
  myerr: boolean;
  constructor(private _fb: FormBuilder,
    private router: Router,
    private _loginService: LoginService,
    private _toasterService: ToastService,
    private _loaderService: LoaderService,
    private _dataPassService : DataPassService,
    private _socialLogin: GoogleAuthService,
    private ngZone: NgZone,
    private _authStoreService : FirestoreService) { }

  ngOnInit() {
    this.createLoginForm();
  }

  createLoginForm() {
    this.loginForm = this._fb.group({
      email: ['', [Validators.pattern(PATTERN.email),
      Validators.required,
      Validators.maxLength(VALIDATION_CRITERIA.emailMaxLength)]],
      password: ['', [Validators.pattern(PATTERN.password),
      Validators.required,
      Validators.minLength(VALIDATION_CRITERIA.passwordMinLength),
      Validators.maxLength(VALIDATION_CRITERIA.passwordMaxLength)]],
      device_id: ['1234'],
      device_token: ['1234'],
      device_type: ["web"],
    })
  }

  getControl(control) {
    return this.loginForm.controls[control];
  }

  login() {
    this.myerr = false
    console.log(this.loginForm.value);
    if (this.loginForm.valid) {
      this.loginForm.disable();
      trimData(this.loginForm.value);
      this._loginService.login(this.loginForm.value).subscribe(res => {

        console.log(res);
        this.loginForm.disabled;
        localStorage.setItem('authorisation', res['data'].access_token);
        this.router.navigate(['']);
        this._loaderService.loader.next(false);
        // this._toasterService.success('Login Success', 3000);
      }, (err => {
        this.myerr = true;
        console.log(err);
        this.erro = err.error.message;
        console.log(this.erro, 'fsdffefefeerrer');
        setTimeout(function () {
          document.getElementById('msgerr').innerHTML = '';
        }, 3000);

        this.loginForm.enable();

        this.loginForm.controls.email.setValue('');
        this.loginForm.controls['email'].setErrors({ 'incorrect': true });
        this._loaderService.loader.next(false);
        // this._toasterService.success(err.error.message, 10000);
      }))
    }
  }

  signNavigating() {
    this.router.navigate([`${ACCOUNT}/${SIGNUP}`]);
  }

  forgotNavigate() {
    this.router.navigate([`${ACCOUNT}/${FORGET_PASSWORD}`])
  }

  navigateMain() {
    this.router.navigate(['']);
  }

  googleSignIn() {
    this.loginForm.disable();
    const one = new auth.GoogleAuthProvider();

    this._socialLogin.AuthLogin(one).then(result => {
      console.log(result);

      this._authStoreService.existEmail(result).subscribe(res => {
        console.log(res,'email exist ... !!');
        if (res.length > 0) {
         return
        }
        else {
          this._authStoreService.createUser(result).then(res=>{
            console.log(res)
          },(err=>{
            console.log(err);
          }));
          console.log("Does not exist.");
        }
      });

      this._loaderService.loader.next(false);
      // this._dataPassService.dataPass.next(result.additionalUserInfo.profile); 
  
      localStorage.setItem('social-auth', result.credential['accessToken']);
      // previous component is not destroying error .. solved By this ngZoneRun
      this.ngZone.run(() => this.router.navigate(['']));
      // this.router.navigate(['']);

    }).catch(err => {
      //error show
      console.log(err);
      this.myerr = true;
      console.log(err);
      this.erro = err.message;
      console.log(this.erro, 'fsdffefefeerrer');
      setTimeout(function () {
        document.getElementById('msgerr').innerHTML = '';
        this.erro = '';
      }, 5000);
      // console.log(err);
    })

  }

  facebookSignIn() {
    this.myerr = false
    this.loginForm.disable();
    const one =  new auth.FacebookAuthProvider();
    this._socialLogin.AuthLogin(one).then(result => {
      console.log(result);
      localStorage.setItem('social-auth', result.credential['accessToken']);
      // previous component is not destroying error .. solved By this ngZoneRun
      this.ngZone.run(() => this.router.navigate(['']));

    }).catch(err => {
      //error show
      console.log(err);
      this.myerr = true;
      console.log(err);
      this.erro = err.message;
      console.log(this.erro, 'fsdffefefeerrer');
      setTimeout(function () {
      document.getElementById('msgerr').innerHTML = '';
      this.erro = '';
      }, 5000);      
      // console.log(err);
    })

  }

  // createUser(value, avatar) {
  //   return this.db.collection('users').add({
  //     name: value.name,
  //     nameToSearch: value.name.toLowerCase(),
  //     surname: value.surname,
  //     age: parseInt(value.age),
  //     avatar: avatar
  //   });
  // }


  ngOnDestroy() {

    console.log('hiiiiiii');

  }

}
