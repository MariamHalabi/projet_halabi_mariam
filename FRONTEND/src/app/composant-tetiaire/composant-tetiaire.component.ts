import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EtatPanier } from '../shared/etats/etat-panier';
import { Select } from '@ngxs/store';

@Component({
  selector: 'app-composant-tetiaire',
  templateUrl: './composant-tetiaire.component.html',
  styleUrls: ['./composant-tetiaire.component.css'],
})
export class ComposantTetiaireComponent implements OnInit {
  @Select(EtatPanier.getNbProduits) productCount$!: Observable<number>;

  constructor() {}

  ngOnInit(): void {}
}
