import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ComposantProduitComponent } from '../composant-produit/composant-produit.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [{ path: '', component: ComposantProduitComponent }];

@NgModule({
  declarations: [ComposantProduitComponent],
  imports: [CommonModule, RouterModule.forChild(routes), FormsModule],
})
export class CatalogueModule {}
