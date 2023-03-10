import {
  Component,
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
} from '@angular/core';

@Component({
  selector: 'parent',
  templateUrl: './parent.component.html',
})
export class ParentComponent
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked
{
  varMessage: string = '变量message';
  inputFor: number = 1;

  cssVar: string = 'yellow f-red';
  cssFlag = false;

  changeChildInput(): void {
    console.log('执行changeChildInput');
    this.inputFor = this.inputFor + 1;
  }

  ngOnChanges(): void {
    console.log('父组件ngOnChanges', this);
  }
  ngAfterViewChecked(): void {
    console.log('父组件AfterViewChecked', this);
  }
  ngAfterViewInit(): void {
    console.log('父组件ngAfterViewInit', this);
  }
  ngAfterContentChecked(): void {
    console.log('父组件ngAfterContentChecked', this);
  }
  ngAfterContentInit(): void {
    console.log('父组件ngAfterContentInit', this);
  }
  ngDoCheck(): void {
    console.log('父组件ngDoCheck', this);
  }
  ngOnInit(): void {
    console.log('父组件ngOnInit', this);
  }
}
