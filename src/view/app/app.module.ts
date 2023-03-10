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

import { ParentContent } from '../dynamic-component/parent.component';
import { AdBanner } from '../dynamic-component/banner/banner.component';
import { AdDirective } from '../dynamic-component/banner/ad/ad.directive';
import { AdService } from '../dynamic-component/ad.service';
import { MusicAd } from '../dynamic-component/banner/ad/musicAb.component';
import { MilkAd } from '../dynamic-component/banner/ad/milkAd.component';

// 指令测试
import { TestDirectiveComponent } from '../directive/directive.component';
import { TestDirective } from '../directive/test.directive';
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
    ParentContent,
    AdBanner,
    AdDirective,
    MusicAd,
    MilkAd,
    TestDirective,
    TestDirectiveComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [AdService],
  bootstrap: [AppComponent],
})
export class AppModule {}
