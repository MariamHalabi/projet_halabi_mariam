import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}
  env = environment;
  connected: boolean = false;

  login(login: string, password: string): Observable<any> {
    this.connected = true;
    return this.http.post(this.env.apiUrl + '/login', { login, password });
  }

  signout() {
    this.connected = false;
  }
}
