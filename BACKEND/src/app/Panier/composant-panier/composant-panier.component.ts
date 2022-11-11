import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { RemoveProduit } from 'src/app/shared/actions/panier-actions';
import { Produit } from 'src/app/shared/modeles/produit';

@Component({
  selector: 'app-composant-panier',
  templateUrl: './composant-panier.component.html',
  styleUrls: ['./composant-panier.component.css'],
})
export class ComposantPanierComponent {
  products$: Observable<Produit[]>;

  constructor(private store: Store) {
    this.products$ = this.store.select((state) => state.panier.produits);
  }

  removeProduitFromPanier(productIndex: Number) {
    this.store.dispatch(new RemoveProduit(productIndex));
  }
}
