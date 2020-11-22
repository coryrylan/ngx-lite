import { Component } from '@angular/core';
import { fadeAnimation } from './common/animations/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeAnimation],
})
export class AppComponent {
  show = false;
}
