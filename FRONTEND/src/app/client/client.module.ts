import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ComposantFormulaireComponent } from '../composant-formulaire/composant-formulaire.component';
import { ComposantValidationComponent } from '../composant-validation/composant-validation.component';
import { PhonePipe } from '../phone.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ClientService } from './services/client.service';

const routes: Routes = [
  { path: '', component: ComposantFormulaireComponent },
  { path: 'recap', component: ComposantValidationComponent },
];

@NgModule({
  declarations: [
    ComposantFormulaireComponent,
    ComposantValidationComponent,
    PhonePipe,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [ClientService],
})
export class ClientModule {}
