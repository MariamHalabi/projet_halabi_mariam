import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ComposantTetiaireComponent } from './composant-tetiaire/composant-tetiaire.component';
import { ComposantFooterComponent } from './composant-footer/composant-footer.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ApiHttpInterceptor } from './shared/interceptor';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginService } from './shared/les-services/login.service';
import { Router } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AccueilComponent } from './accueil/accueil/accueil.component';
import { EtatPanier } from './shared/etats/etat-panier';
import { ClientService } from './client/services/client.service';
import { SearchComponent } from './search/search.component';
import { SearchService } from './service-search/search.service';
import { FormsModule } from '@angular/forms';
import { ProduitDetailsComponent } from './produit-details/produit-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ComposantTetiaireComponent,
    ComposantFooterComponent,
    AccueilComponent,
    SearchComponent,
    ProduitDetailsComponent,
  ],
  imports: [
    NgxsModule.forRoot([EtatPanier]),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
    LoginService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiHttpInterceptor,
      multi: true,
      deps: [Router],
    },
    SearchService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
