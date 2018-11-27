import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class NgxMenuService {
  visible = new Subject<boolean>();
}
