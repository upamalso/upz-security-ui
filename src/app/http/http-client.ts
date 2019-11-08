import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpConfiguration {

  private serverPort = 'http://localhost:1234';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  public httpPost(url: string, payload: any) {

    this.http.post(this.serverPort + '/' + url, payload, this.httpOptions).toPromise();

  }
}
