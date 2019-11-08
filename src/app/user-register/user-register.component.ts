import {Component, OnInit} from '@angular/core';
import {HttpConfiguration} from '../http/http-client';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  public username: string;
  public password: string;

  constructor(private httpConfiguration: HttpConfiguration) { }

  ngOnInit() {
  }

  public submitRegistrationData() {
    let payload = {};
    payload['username'] = this.username;
    payload['password'] = this.password;

    this.httpConfiguration.httpPost('user', payload);
  }

}
