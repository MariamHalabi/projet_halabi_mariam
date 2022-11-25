import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone',
})
export class PhonePipe {
  static transform(rawNum: String) {
    //rawNum.slice(0, 1);

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
      console.log('1 ' + rawNum);
    }

    if (rawNum.charAt(0) == '0') rawNum = '+33-' + rawNum.substr(1);

    console.log(rawNum);
    let newStr =
      rawNum.charAt(0) +
      rawNum.charAt(1) +
      rawNum.charAt(2) +
      rawNum.charAt(3) +
      rawNum.charAt(4) +
      '-' +
      rawNum.charAt(5) +
      rawNum.charAt(6) +
      '-' +
      rawNum.charAt(7) +
      rawNum.charAt(8) +
      '-' +
      rawNum.charAt(9) +
      rawNum.charAt(10) +
      '-' +
      rawNum.charAt(11) +
      rawNum.charAt(12);

    return newStr;
  }
}
