/*
 * @Author: hxian 2232436248@qq.com
 * @Date: 2023-03-09 16:15:22
 * @LastEditors: hxian 2232436248@qq.com
 * @LastEditTime: 2023-03-10 09:21:06
 * @FilePath: \my-app\src\view\projection\base\base.component.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import {
  Component,
  Input,
  Directive,
  TemplateRef,
  ContentChild,
  OnInit,
  AfterContentInit,
} from '@angular/core';

@Directive({
  selector: '[otherName]',
})
export class BaseComponentDirective implements AfterContentInit {
  constructor(public templateRef: TemplateRef<any>) {
    console.log('templateRef', templateRef);
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit', this.templateRef);
  }
}

@Component({
  selector: 'base-component',
  templateUrl: './base.component.html',
})
export class BaseComponent implements AfterContentInit {
  ngAfterContentInit(): void {
    // console.log('ngAfterContentInit', this.content);
  }
  contentId = 'anyway';
  @Input() showFlag = false;
  @ContentChild(BaseComponentDirective) content!: BaseComponentDirective;
}
