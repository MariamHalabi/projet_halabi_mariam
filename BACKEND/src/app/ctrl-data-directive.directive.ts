import {
  Directive,
  HostListener,
  ElementRef,
  Input,
  Type,
} from '@angular/core';

@Directive({
  selector: '[appCtrlDataDirective],[champsCP]',
})
export class CtrlDataDirectiveDirective {
  constructor() {}

  @Input() appCtrlDataDirective: any;
  @Input() champsCP: any;

  test(cp: string): boolean {
    // let regEx = new RegExp('/^d{5}$/');
    var regEx = /^\d{5}$/;

    if (regEx.test(cp)) {
      return true;
    } else {
      return false;
    }
  }
  @HostListener('click') onclick() {
    console.log(
      'param ' +
        typeof this.appCtrlDataDirective +
        ' ' +
        this.appCtrlDataDirective
    );
  }

  public testChamps(cp: string, champsAtester: string): boolean {
    var regEx;

    switch (champsAtester) {
      case 'cp':
        regEx = /^\d{5}$/;
        break;
      case 'tel':
        cp = this.correctPhoneFormat(cp);
        regEx = /^\d{10}$/;
        console.log('cp ' + cp);
        break;
    }

    if (regEx != undefined && regEx.test(cp)) {
      return true;
    } else {
      return false;
    }
  }

  correctPhoneFormat(rawNum: String): any {
    console.log('func 1 ' + rawNum);
    if (rawNum.includes('-') && rawNum.includes('+33')) {
      rawNum =
        '0' +
        rawNum.charAt(4) +
        rawNum.charAt(6) +
        rawNum.charAt(7) +
        rawNum.charAt(9) +
        rawNum.charAt(10) +
        rawNum.charAt(12) +
        rawNum.charAt(13) +
        rawNum.charAt(15) +
        rawNum.charAt(16);
    }
    return rawNum;
  }
  @HostListener('submit') onsubmit() {
    console.log('hi');
  }
}
