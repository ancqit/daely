import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthPhoneService {

  constructor() { }

  get windowRef(){
    return window;
  }

  private _verificationId: any;
  public get verificationId() {
    return this._verificationId;
  }
  public set verificationId(value) {
    this._verificationId = value;
  }

}
