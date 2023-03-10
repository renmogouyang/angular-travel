import { Component } from '@angular/core';
import { AdComponent } from './ad.component';

@Component({
  template: ` <p>
 {{data}} 
  </p> `,
})
export class MusicAd implements AdComponent {
  data: any;
}
