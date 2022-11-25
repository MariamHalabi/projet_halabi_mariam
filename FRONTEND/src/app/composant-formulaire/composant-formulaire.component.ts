import { DecimalPipe } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { AppComponent } from '../app.component';
import { CtrlDataDirectiveDirective } from '../ctrl-data-directive.directive';
import { PhonePipe } from '../phone.pipe';
import { ClientService } from '../client/services/client.service';
import { Client } from '../classes/client';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-composant-formulaire',
  templateUrl: './composant-formulaire.component.html',
  styleUrls: ['./composant-formulaire.component.css'],
})
export class ComposantFormulaireComponent implements OnInit {
  client: Client = this.clientService.client;
  clientForm = this.formbuilder.group({
    lastname: [this.client.lastname],
    firstname: [this.client.firstname],
    email: [this.client.email],
    login: [this.client.login],
    password: [this.client.password],
    phone: [this.client.phone],
    locale: [this.client.locale],
    address: [this.client.address],
    city: [this.client.city],
    zip: [this.client.cp],
    country: [this.client.country],
    civility: [this.client.civility],
  });

  constructor(
    private clientService: ClientService,
    private formbuilder: FormBuilder,
    private router: Router
  ) {}

  title: String = 'Titre du Composant 1';
  valid: Boolean = true;
  prenom: String = '';
  nom: String = '';
  adresse: String = '';
  cp: string = '';
  ville: String = '';
  tel: String = '';
  email: String = '';
  civilite: String = '';
  pays: String = '';
  login: String = '';
  password: String = '';
  recap: String = '';

  res = false;
  public isShownCp: boolean = false;
  public isShownTel: boolean = false;
  public recapShow: boolean = false;

  directive: CtrlDataDirectiveDirective = new CtrlDataDirectiveDirective();
  @ViewChild('codePostalChamps') inputCP: ElementRef | undefined;
  @ViewChild('telnumber') inputTEL: ElementRef | undefined;
  @ViewChild('recap') recapElement: ElementRef | undefined;

  set appCtrlDataDirective(directive: CtrlDataDirectiveDirective) {
    if (this.inputCP != undefined)
      this.res = directive.testChamps(this.inputCP.nativeElement.value, 'cp');
  }

  ngOnInit(): void {}

  clic(): void {
    this.tel = PhonePipe.transform(this.tel);
    if (this.inputCP != undefined && this.inputTEL != undefined) {
      console.log('yes');
      if (
        this.directive.testChamps(this.inputCP.nativeElement.value, 'cp') &&
        this.directive.testChamps(this.inputTEL.nativeElement.value, 'tel')
      ) {
        this.isShownCp = false;
        this.isShownTel = false;

        this.inputCP.nativeElement.style.borderColor = '';
        this.inputTEL.nativeElement.style.borderColor = '';

        this.clicChange();
        this.recapShow = true;

        console.log(
          'cpifOne ' + this.isShownCp + ' telifOne ' + this.isShownTel
        );
      } else {
        this.recapShow = false;
        if (
          !this.directive.testChamps(this.inputCP.nativeElement.value, 'cp')
        ) {
          this.inputCP.nativeElement.style.borderColor = 'red';
          this.isShownCp = true;
          console.log('cp ' + this.isShownCp);
        }

        if (
          !this.directive.testChamps(this.inputTEL.nativeElement.value, 'tel')
        ) {
          this.inputTEL.nativeElement.style.borderColor = 'red';
          this.isShownTel = true;
          console.log('tel ' + this.isShownTel);
        }
      }
    }
    this.clientService.register(this.client).subscribe((client) => {
      this.clientService.client = client;
      this.router.navigate(['/client/result']);
    });
  }

  clicChange() {
    this.recap =
      'Votre Prénom : ' +
      this.prenom +
      ' ***** Votre nom : ' +
      this.nom +
      ' ***** Votre adresse : ' +
      this.adresse +
      ' ***** Votre code postal : ' +
      this.cp +
      ' ***** Votre ville : ' +
      this.ville +
      ' ***** Votre pays : ' +
      this.pays +
      ' ***** Votre numéro de téléphone : ' +
      this.tel +
      ' ***** Votre adresse mail : ' +
      this.email +
      ' ***** Vous êtes : ' +
      this.civilite +
      ' ***** Votre identifiant : ' +
      this.login +
      ' ***** Votre mot de passe : ' +
      this.password;
  }
  ngOnDestroy() {}
}
