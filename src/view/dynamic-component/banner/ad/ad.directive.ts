import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[adBannerContent]',
})
export class AdDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
