import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-send-otp',
  templateUrl: './send-otp.component.html',
  styleUrls: ['./send-otp.component.scss'],
})
export class SendOtpComponent implements OnInit {
  @Output() verifyOtp: EventEmitter<any> = new EventEmitter();
  value = '';
  showOtp: boolean = false;
  val: string = '';
  constructor() {}

  ngOnInit(): void {}

  getNumber() {
    console.log(this.value);
    this.val = this.value.toString();
    if (this.val.length == 10) {
      this.showOtp = true;
    } else {
      this.showOtp = false;
    }
  }
  showOtpMode(){
    this.verifyOtp.emit();
  }
}
