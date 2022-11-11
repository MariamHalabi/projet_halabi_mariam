import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { AddProduit, RemoveProduit } from '../actions/panier-actions';
import { EtatPanierModel } from './etat-panier-model';

@State<EtatPanierModel>({
  name: 'panier',
  defaults: {
    produits: [],
  },
})
@Injectable()
export class EtatPanier {
  @Selector()
  static getNbProduits(state: EtatPanierModel) {
    return state.produits.length;
  }

  @Action(AddProduit)
  add(
    { getState, patchState }: StateContext<EtatPanierModel>,
    { payload }: AddProduit
  ) {
    const state = getState();
    patchState({
      produits: [...state.produits, payload],
    });
  }

  @Action(RemoveProduit)
  delete(
    { getState, patchState }: StateContext<EtatPanierModel>,
    { payload }: RemoveProduit
  ) {
    const state = getState();
    patchState({
      produits: state.produits.filter((produit, index) => index !== payload),
    });
  }
}
