import { asNativeElements, ElementRef } from '@angular/core';
import { CtrlDataDirectiveDirective } from './ctrl-data-directive.directive';

describe('CtrlDataDirectiveDirective', () => {
  it('should create an instance', () => {
    const directive = new CtrlDataDirectiveDirective(
      ElementRef,
      CtrlDataDirectiveDirective
    );
    expect(directive).toBeTruthy();
  });
});
