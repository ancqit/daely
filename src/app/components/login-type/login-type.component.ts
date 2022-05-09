import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-type',
  templateUrl: './login-type.component.html',
  styleUrls: ['./login-type.component.scss'],
})
export class LoginTypeComponent implements OnInit {
  favoriteSeason:string ='';
  seasons: string[] = ['Seller', 'Buyer', 'Delivery'];
  constructor() {}

  ngOnInit(): void {}
}
