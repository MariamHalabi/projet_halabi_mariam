import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ComposantTetiaireComponent } from './composant-tetiaire/composant-tetiaire.component';
import { ComposantFormulaireComponent } from './composant-formulaire/composant-formulaire.component';
import { ComposantValidationComponent } from './composant-validation/composant-validation.component';
import { ComposantFooterComponent } from './composant-footer/composant-footer.component';
import { CtrlDataDirectiveDirective } from './ctrl-data-directive.directive';
import { PhonePipe } from './phone.pipe';
import { ComposantProduitComponent } from './composant-produit/composant-produit.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ComposantTetiaireComponent,
    ComposantFormulaireComponent,
    ComposantValidationComponent,
    ComposantFooterComponent,
    CtrlDataDirectiveDirective,
    PhonePipe,
    ComposantProduitComponent,
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
