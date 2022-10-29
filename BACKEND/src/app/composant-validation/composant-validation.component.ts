import {
  Component,
  ElementRef,
  Input,
  OnInit,
  Output,
  Type,
} from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-composant-validation',
  templateUrl: './composant-validation.component.html',
  styleUrls: ['./composant-validation.component.css'],
})
export class ComposantValidationComponent implements OnInit {
  constructor() {}

  @Input() firstname: String = '';
  @Input() lastname: String = '';
  @Input() adress: String = '';
  @Input() pc: string = '';
  @Input() city: String = '';
  @Input() phone: String = '';
  @Input() mail: String = '';
  @Input() civ: String = '';
  @Input() pass: String = '';
  @Input() userid: String = '';
  @Input() country: String = '';
  @Input() champsPC: any;

  

  verif: string = '';
  res: boolean = false;

  @Output() change: EventEmitter<String> = new EventEmitter<String>();

  ngOnInit(): void {}

  test(cp: string, rg: string): boolean {
    let regEx = new RegExp(rg, 'g');
    this.verif = cp;

    console.log(cp);

    this.res = regEx.test(cp);
    console.log(this.res);
    return this.res;
  }

  clic() {
    console.log('chzmps chzmps ' + this.champsPC);

    this.change.emit(
      'Votre Prénom : ' +
        this.firstname +
        ' ***** Votre nom : ' +
        this.lastname +
        ' ***** Votre adresse : ' +
        this.adress +
        ' ***** Votre code postal : ' +
        this.pc +
        ' ***** Votre ville : ' +
        this.city +
        ' ***** Votre pays : ' +
        this.country +
        ' ***** Votre numéro de téléphone : ' +
        this.phone +
        ' ***** Votre adresse mail : ' +
        this.mail +
        ' ***** Vous êtes : ' +
        this.civ +
        ' ***** Votre identifiant : ' +
        this.userid +
        ' ***** Votre mot de passe : ' +
        this.pass
    );
  }
}
