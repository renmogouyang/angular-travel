import { Component, Input } from '@angular/core';

@Component({
  selector: 'home-content',
  templateUrl: './content.component.html',
})
export class HomeContentComponent {
  @Input() message: string = '';
}
