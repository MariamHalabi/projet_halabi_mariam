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

  login(login: string, password: string) /*: Obervable de any je crois*/ {
    //return this.http.post(this.env.apiUrl + '/login', { login, password });
    this.connected = true;
  }

  signout() {
    this.connected = false;
  }
}
