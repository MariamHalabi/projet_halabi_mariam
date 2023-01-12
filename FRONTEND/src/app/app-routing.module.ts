import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil/accueil.component';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';
import { ProduitDetailsComponent } from './produit-details/produit-details.component';
import { ComposantValidationComponent } from './composant-validation/composant-validation.component';
import { LoginGuard } from './core/login.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
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
    canActivate: [LoginGuard],
  },
  {
    path: 'panier',
    loadChildren: () =>
      import('./Panier/composant-panier/panier.module').then(
        (m) => m.PanierModule
      ),
    canActivate: [LoginGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  { path: 'search', component: SearchComponent, canActivate: [LoginGuard] },
  {
    path: 'product-details/:id',
    component: ProduitDetailsComponent,
    canActivate: [LoginGuard],
  },
  { path: 'recap', component: ComposantValidationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
