import { Component, OnInit } from '@angular/core';

import { fadeAnimation } from './../common/animations';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.scss'],
  animations: [fadeAnimation]
})
export class DocsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  getRouterOutletState(outlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }
}
