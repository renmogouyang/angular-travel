import { Component } from '@angular/core';
import { AdComponent } from './ad.component';

@Component({
  template: ` <p>{{ data }}</p> `,
})
export class MilkAd implements AdComponent {
  data: any;
}
