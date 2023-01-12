import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { CatalogueService } from '../catalogue/services/catalogue.service';
import { AddProduit } from '../shared/actions/panier-actions';
import { Produit } from '../shared/modeles/produit';

@Component({
  selector: 'app-produit-details',
  templateUrl: './produit-details.component.html',
  styleUrls: ['./produit-details.component.css'],
})
export class ProduitDetailsComponent implements OnInit {
  constructor(
    private service: CatalogueService,
    private route: Router,
    private store: Store,
    private activateRoute: ActivatedRoute
  ) {}
  product: Produit | undefined;
  id!: number;
  ngOnInit(): void {
    this.service
      .getProduits()
      .subscribe(
        (produit) =>
          (this.product = produit.find((p) => p.id == this.getParamsURL()))
      );
  }

  getParamsURL(): number {
    this.activateRoute.params.subscribe((params) => {
      this.id = +params['id'];
    });
    return this.id;
  }

  addProduitToPanier(product: Produit) {
    this.store.dispatch(new AddProduit(product));
  }
}
