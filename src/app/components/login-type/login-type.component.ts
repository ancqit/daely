import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-login-type',
  templateUrl: './login-type.component.html',
  styleUrls: ['./login-type.component.scss'],
})
export class LoginTypeComponent implements OnInit {
  @Output() loginType: EventEmitter<any> = new EventEmitter();

  favoriteSeason: string = '';
  seasons: string[] = ['Seller', 'Buyer', 'Delivery'];

  constructor() {}

  ngOnInit(): void {}

  change(value: any) {
    console.log(value);
    this.loginType.emit(value);
  }
}
