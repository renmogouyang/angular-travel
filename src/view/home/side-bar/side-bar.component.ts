import { Component } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  //   styleUrls: ['./side-bar.component.less']
})
export class SideBarComponent {
  barList = [
    {
      label: '注册',
      link: 'register',
    },
    {
      label: '父子通信演示',
      link: 'parent-child',
    },
    {
      label: '投影演示',
      link: 'projection-page',
    },
  ];
}
