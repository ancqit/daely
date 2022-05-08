import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verify-otp',
  templateUrl: './verify-otp.component.html',
  styleUrls: ['./verify-otp.component.scss'],
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
    this.router.navigate(['home']);
  }
}
