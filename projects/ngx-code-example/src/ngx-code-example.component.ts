import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ElementRef,
  ViewEncapsulation,
  ChangeDetectionStrategy
} from '@angular/core';
import * as Prism from 'prismjs';

@Component({
  selector: 'ngx-code-example',
  templateUrl: './ngx-code-example.component.html',
  styleUrls: ['./ngx-code-example.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxCodeExampleComponent implements OnInit {
  @Input() language = 'javascript';
  @ViewChild('code') ref: ElementRef;
  safeHtml = '';

  ngOnInit() {
    const html = this.ref.nativeElement.innerHTML
      .replace(/\{ \{/gi, '{{')
      .replace(/\} \}/gi, '}}')
      .replace(/&lt;/gi, '<')
      .replace(/&gt;/gi, '>');

    this.safeHtml = Prism.highlight(html, Prism.languages[this.language]);
  }
}
