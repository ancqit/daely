import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
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
