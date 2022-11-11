import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ComposantTetiaireComponent } from './composant-tetiaire/composant-tetiaire.component';
import { ComposantFooterComponent } from './composant-footer/composant-footer.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AccueilComponent } from './accueil/accueil/accueil.component';
import { EtatPanier } from './shared/etats/etat-panier';

@NgModule({
  declarations: [
    AppComponent,
    ComposantTetiaireComponent,
    ComposantFooterComponent,
    AccueilComponent,
  ],
  imports: [
    NgxsModule.forRoot([EtatPanier]),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
