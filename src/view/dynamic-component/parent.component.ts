import { Component, OnInit } from '@angular/core';
import { AdItem } from './banner/ad/ad-item';
import { AdService } from './ad.service';

@Component({
  selector: 'parent-content',
  templateUrl: './parent.component.html',
})
export class ParentContent implements OnInit {
  ads: AdItem[] = [];

  constructor(public adservice: AdService) {}

  ngOnInit(): void {
    this.ads = this.adservice.getAds();
  }
}
