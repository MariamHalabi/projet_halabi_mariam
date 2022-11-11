import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil/accueil.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: AccueilComponent },
  {
    path: 'inscription',
    loadChildren: () =>
      import('./client/client.module').then((m) => m.ClientModule),
  },
  {
    path: 'catalogue',
    loadChildren: () =>
      import('./catalogue/catalogue.module').then((m) => m.CatalogueModule),
  },
  {
    path: 'panier',
    loadChildren: () =>
      import('./Panier/composant-panier/panier.module').then(
        (m) => m.PanierModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
