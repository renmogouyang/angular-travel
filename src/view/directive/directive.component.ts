import {
  Component,
  ViewRef,
  OnInit,
  AfterViewInit,
  Directive,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { TestDirective } from './test.directive';

// @Directive({
//   selector: '[testBox2]',
// })
// class TestDirectiveOn {
//   constructor(public viewRef: ViewRef) {}
// }

@Component({
  templateUrl: './directive.component.html',
})
export class TestDirectiveComponent implements AfterViewInit {
  @ViewChild(TestDirective) testBox!: TestDirective;
  ngAfterViewInit(): void {
    console.log('testBoxRef', this.testBox.viewContainerRef);
  }
}
