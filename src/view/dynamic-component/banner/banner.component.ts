import { Component, Input, AfterViewInit, ViewChild } from '@angular/core';

import { AdItem } from './ad/ad-item';
import { AdComponent } from './ad/ad.component';
import { AdDirective } from './ad/ad.directive';

@Component({
  selector: 'ad-banner',
  template: `
    <div>
      <P>BANNER广告位</P>
      <ng-template adBannerContent> 模板 </ng-template>
    </div>
  `,
})
export class AdBanner implements AfterViewInit {
  @Input() ads: AdItem[] = [];
  currentAdIndex = 0;

  updateTimer: any;

  @ViewChild(AdDirective) adContent!: AdDirective;
  ngAfterViewInit(): void {
    console.log('item数据', this.ads);
    console.log('adContent数据', this.adContent.viewContainerRef);
    this.loadComponent();
    this.updateTimer = setInterval(() => {
      this.loadComponent();
      this.currentAdIndex = this.currentAdIndex + 1;
    }, 3000);
  }
  loadComponent(): void {
    const adItem = this.ads[this.currentAdIndex % this.ads.length];
    const viewContentRef = this.adContent.viewContainerRef;
    viewContentRef.clear();
    const componentRef = viewContentRef.createComponent<AdComponent>(
      adItem.component
    );
    componentRef.instance.data = adItem.data;
  }
}
