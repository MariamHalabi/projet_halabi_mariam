import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Catalogue } from '../classes/catalogue';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class ProduitServiceService {
  constructor(public http: HttpClient) {}

  env = environment;

  postClient() {}
  getClient() {}
  postLogin() {}

  getCatalogue(): Observable<Catalogue[]> {
    return this.http.get<Catalogue[]>(this.env.catalogue);
  }
}
