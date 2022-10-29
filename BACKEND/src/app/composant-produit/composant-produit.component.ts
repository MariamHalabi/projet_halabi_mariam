import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { of, from, interval, filter } from 'rxjs';
import { map, tap, reduce, take } from 'rxjs/operators';
import { ProduitServiceService } from '../service-produit/produit-service.service';
import { Catalogue } from '../classes/catalogue';

@Component({
  selector: 'app-composant-produit',
  templateUrl: './composant-produit.component.html',
  styleUrls: ['./composant-produit.component.css'],
})
export class ComposantProduitComponent implements OnInit {
  constructor(public service: ProduitServiceService) {}

  catalogue$?: Observable<Catalogue[]>;

  ngOnInit(): void {
    this.catalogue$ = this.service.getCatalogue();
  }

  filterBySize(taille: String) {
    this.catalogue$ = this.service
      .getCatalogue()
      .pipe(
        map((produits) =>
          produits.filter((produit) => produit.taille == taille)
        )
      );
  }
  allProduits() {
    this.catalogue$ = this.service.getCatalogue();
  }
}
