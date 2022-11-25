import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ComposantProduitComponent } from '../composant-produit/composant-produit.component';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiHttpInterceptor } from '../shared/interceptor';
import { CatalogueService } from './services/catalogue.service';

const routes: Routes = [{ path: '', component: ComposantProduitComponent }];

@NgModule({
  declarations: [ComposantProduitComponent],
  imports: [CommonModule, RouterModule.forChild(routes), FormsModule],
  providers: [
    CatalogueService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiHttpInterceptor,
      multi: true,
    },
  ],
})
export class CatalogueModule {}

