import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-badges',
  templateUrl: './badges.component.html',
  styleUrls: ['./badges.component.scss']
})
export class BadgesComponent implements OnInit {
  @Input() package = '';
  @Input() stackblitzId = '';
  constructor() { }

  ngOnInit() {
  }

}
