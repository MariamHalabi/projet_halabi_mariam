import { Produit } from '../modeles/produit';

export class AddProduit {
  static readonly type = '[Panier] AddProduit';
  constructor(public payload: Produit) {}
}

export class RemoveProduit {
  static readonly type = '[Panier] RemoveProduit';

  constructor(public payload: Number) {}
}
