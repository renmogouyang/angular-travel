import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterPage } from '../view/register/register.conponent';
import { HomePageComponent } from 'src/view/home/home.component';
import { ParentComponent } from 'src/view/component-msg/parent.component';
import { ProjectionComponent } from 'src/view/projection/projection.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
