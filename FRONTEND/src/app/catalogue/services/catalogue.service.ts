import { Injectable } from '@angular/core';
import { Produit } from '../../shared/modeles/produit';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CatalogueService {
  constructor(private http: HttpClient) {}
  env = environment;

  getProduits(): Observable<Produit[]> {
    return this.http.get<Produit[]>(this.env.apiUrl + '/products');
  }
}
