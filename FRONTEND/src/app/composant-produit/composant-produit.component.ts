import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CatalogueService } from '../catalogue/services/catalogue.service';
import { map, Observable } from 'rxjs';
import { Store } from '@ngxs/store';
import { AddProduit } from '../shared/actions/panier-actions';
import { Produit } from '../shared/modeles/produit';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-composant-produit',
  templateUrl: './composant-produit.component.html',
  styleUrls: ['./composant-produit.component.css'],
})
export class ComposantProduitComponent implements OnInit {
  products$?: Observable<Produit[]>;
  show: boolean = false;
  env = environment;
  @ViewChild('myModal') myModal: ElementRef | undefined;

  ngOnInit(): void {
    this.products$ = this.catalogueService.getProduits();
  }

  constructor(
    private catalogueService: CatalogueService,
    private store: Store,
    private route: Router
  ) {}

  addProduitToPanier(product: Produit) {
    this.store.dispatch(new AddProduit(product));
  }

  showModal(product: Produit) {
    console.log('avant ' + this.show);

    this.show = true;

    console.log('après ' + this.show);
  }

  showDetails(produit: Produit) {
    this.route.navigate(['product-details/' + produit.id]);

    //this.route.navigate([this.env.apiUrl + '/product-details/' + produit.id]);
  }
  OnReset() {}
}
