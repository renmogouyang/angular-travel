import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
} from '@angular/core';

@Component({
  selector: 'child',
  templateUrl: './child.component.html',
})

//通过继承生命周期接口扩展生命周期的功能
export class ChildComponent
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked
{
  onValueChange(): void {
    this.numberOneChange.emit(this.inputFor);
  }
  @Input() simpleMessage: string = ''; //直接传值
  @Input() varMessage: string = ''; //变量传值
  @Input() inputFor: number = 0; // 双向绑定
  @Input() cssVar: string = ''; //绑定样式

  @Output() numberOneChange = new EventEmitter<number>();

  changeValue(): void {
    console.log('子组件changeValue');
    this.numberOneChange.emit(this.inputFor);
  }

  ngOnChanges(): void {
    console.log('子组件OnChanges', this);
  }

  ngOnInit(): void {
    console.log('子组件ngOnInit', this);
  }
  ngDoCheck(): void {
    console.log('子组件ngDoCheck', this);
  }

  ngAfterViewChecked(): void {
    console.log('子组件ngAfterViewChecked', this);
  }
  ngAfterViewInit(): void {
    console.log('子组件ngAfterViewInit', this);
  }
  ngAfterContentChecked(): void {
    console.log('子组件ngAfterContentChecked', this);
  }
  ngAfterContentInit(): void {
    console.log('子组件ngAfterContentInit', this);
  }
}
