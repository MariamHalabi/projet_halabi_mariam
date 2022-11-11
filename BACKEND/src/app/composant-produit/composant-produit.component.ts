import { Component, OnInit } from '@angular/core';
import { CatalogueService } from '../catalogue/services/catalogue.service';
import { map, Observable } from 'rxjs';
import { Store } from '@ngxs/store';
import { AddProduit } from '../shared/actions/panier-actions';
import { Produit } from '../shared/modeles/produit';

@Component({
  selector: 'app-composant-produit',
  templateUrl: './composant-produit.component.html',
  styleUrls: ['./composant-produit.component.css'],
})
export class ComposantProduitComponent implements OnInit {
  products$?: Observable<Produit[]>;

  ngOnInit(): void {
    this.products$ = this.catalogueService.getProduits();
  }

  constructor(
    private catalogueService: CatalogueService,
    private store: Store
  ) {}

  addProduitToPanier(product: Produit) {
    this.store.dispatch(new AddProduit(product));
  }

  OnReset() {}
}
