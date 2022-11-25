import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ComposantPanierComponent } from './composant-panier.component';

const routes: Routes = [{ path: '', component: ComposantPanierComponent }];

@NgModule({
  declarations: [ComposantPanierComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class PanierModule {}
