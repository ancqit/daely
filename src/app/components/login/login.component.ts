import { Component, OnInit } from '@angular/core';
import { VerifyOtpComponent } from '../verify-otp/verify-otp.component';
import { SendOtpComponent } from '../send-otp/send-otp.component';
import { LoginTypeComponent } from '../login-type/login-type.component';
import { MatRadioButton, MatRadioGroup } from '@angular/material/radio';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports:[VerifyOtpComponent,SendOtpComponent,LoginTypeComponent,CommonModule]
})
export class LoginComponent implements OnInit {
  pickType: boolean = false;
  pickOtp: boolean=false;
  constructor() {}

  ngOnInit(): void {}
  loginType(value: any) {
    console.log(value);
    this.pickType = true;

  }
  verifyOtp(value:any){
    console.log(value);
    this.pickType= false;
    this.pickOtp=true;
  }
}
