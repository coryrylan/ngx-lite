import { element } from 'protractor';
import { Injectable } from '@angular/core';

declare const ResizeObserver;

@Injectable()
export class NgxEqService {
  elements = {};
  resizeObserver: any;

  constructor() {
    this.resizeObserver = new ResizeObserver(entries => {
      for (const entry of entries) {
        const width = entry.contentRect.width;
      }
    });
  }

  getChanges(el) {
    this.elements[el] = element;
    this.resizeObserver.observe(this.elements[el]);
  }

  stopChanges(el) {
    this.resizeObserver.unobserve(this.elements[el]);
  }
}
