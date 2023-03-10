import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '../../router/app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from '../home/home.component';
import { SideBarComponent } from '../home/side-bar/side-bar.component';
import { HomeContentComponent } from '../home/content/content.component';
import { ParentComponent } from '../component-msg/parent.component';
import { ChildComponent } from '../component-msg/child/child.component';

import { ProjectionComponent } from '../projection/projection.component';
import { BaseComponent } from '../projection/base/base.component';
import { BaseComponentDirective } from '../projection/base/base.component';
@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    HomePageComponent,
    HomeContentComponent,
    ParentComponent,
    ChildComponent,
    ProjectionComponent,
    BaseComponent,
    BaseComponentDirective,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
