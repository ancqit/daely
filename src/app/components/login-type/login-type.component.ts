import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRadioButton, MatRadioGroup } from '@angular/material/radio';

@Component({
  selector: 'app-login-type',
  templateUrl: './login-type.component.html',
  styleUrls: ['./login-type.component.scss'],
  imports:[MatRadioButton,MatRadioGroup,CommonModule,FormsModule]
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
