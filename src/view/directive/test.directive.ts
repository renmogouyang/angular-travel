import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[testBox]',
})
export class TestDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
