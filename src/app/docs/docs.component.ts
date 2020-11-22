import { Component } from '@angular/core';

import { fadeAnimation } from './../common/animations';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.scss'],
  animations: [fadeAnimation],
})
export class DocsComponent {
  getRouterOutletState(outlet: any) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }
}
