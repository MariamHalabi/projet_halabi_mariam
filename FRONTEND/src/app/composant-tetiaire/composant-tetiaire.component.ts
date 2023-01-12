import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EtatPanier } from '../shared/etats/etat-panier';
import { Select } from '@ngxs/store';
import { LoginService } from '../shared/les-services/login.service';
import { LoginGuard } from '../core/login.guard';

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
