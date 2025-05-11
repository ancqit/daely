import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { Router } from '@angular/router';
import { NgOtpInputModule } from 'ng-otp-input';

@Component({
  selector: 'app-verify-otp',
  templateUrl: './verify-otp.component.html',
  styleUrls: ['./verify-otp.component.scss'],
  imports:[MatIcon,CommonModule,NgOtpInputModule]
})
export class VerifyOtpComponent implements OnInit {
  otp: any;
  verifyOtp: boolean = false;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onOtpChange(otpValue: any) {
    console.log(otpValue);
    this.otp = otpValue.toString();
    if (this.otp.length == 6) {
      this.verifyOtp = true;
    } else {
      this.verifyOtp = false;
    }
  }

  verifyOtpMode(){
   if(confirm('please remember this!'))this.router.navigate(['home']);
  }
}
