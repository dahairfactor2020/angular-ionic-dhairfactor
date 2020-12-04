import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  public backEndPermitted = false;
  constructor() { }

  backEndPermission() {
    this.backEndPermitted = true;
  }
}
