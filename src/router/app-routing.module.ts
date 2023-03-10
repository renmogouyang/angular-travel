/*
 * @Author: hxian 2232436248@qq.com
 * @Date: 2023-03-09 09:11:30
 * @LastEditors: hxian 2232436248@qq.com
 * @LastEditTime: 2023-03-10 10:02:29
 * @FilePath: \my-app\src\router\app-routing.module.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterPage } from '../view/register/register.conponent';
import { HomePageComponent } from 'src/view/home/home.component';
import { ParentComponent } from 'src/view/component-msg/parent.component';
import { ProjectionComponent } from 'src/view/projection/projection.component';
import { ParentContent } from 'src/view/dynamic-component/parent.component';
import { TestDirectiveComponent } from 'src/view/directive/directive.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home', //默认路由
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomePageComponent,
    pathMatch: 'full',
  },
  {
    path: 'register',
    component: RegisterPage,
    pathMatch: 'full',
  },
  {
    path: 'parent-child',
    component: ParentComponent,
    pathMatch: 'full',
  },
  {
    path: 'projection-page',
    component: ProjectionComponent,
    pathMatch: 'full',
  },
  {
    path: 'dynamic-component',
    component: ParentContent,
    pathMatch: 'full',
  },
  {
    path: 'test-directive',
    component: TestDirectiveComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
