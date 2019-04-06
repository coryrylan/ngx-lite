import {
  forwardRef,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
  ViewChild,
  Inject,
  ViewEncapsulation,
  ChangeDetectionStrategy
} from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR
} from '@angular/forms';
import {
  NGX_INPUT_TAG_TAG_FORMATTER,
  TagFormatter
} from './ngx-input-tag.di-tokens';

export enum KeyCodes {
  Backspace = 8,
  Tab = 9,
  Enter = 13,
  Escape = 27,
  LeftArrow = 37,
  UpArrow = 38,
  RightArrow = 39,
  DownArrow = 40,
  Comma = 188
}

@Component({
  selector: 'ngx-input-tag',
  templateUrl: './ngx-input-tag.component.html',
  styleUrls: ['./ngx-input-tag.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NgxInputTagComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => NgxInputTagComponent),
      multi: true
    }
  ],
  encapsulation: ViewEncapsulation.None
})
export class NgxInputTagComponent implements ControlValueAccessor {
  get value() {
    return this._value;
  }

  set value(val) {
    this._value = val;
    this.onChange(val);
    this.onTouched();
  }

  @ViewChild('inputElement') inputElement: ElementRef;
  @Input() tagSuggestions: string[] = [];
  @Input() maxTagLength = 25;
  @Input() maxNumberOfTags = 1000;
  @Output() readonly textChange = new EventEmitter<string>();

  private _value: string[] = [];
  private prevTagInput = '';
  private currentNumberOfTags = 0;
  private tagError: { message: string } = null;

  constructor(
    @Inject(NGX_INPUT_TAG_TAG_FORMATTER) private tagFormatter: TagFormatter
  ) {}

  onChange = (_value: string[]) => {};

  onTouched = () => {};

  registerOnChange(fn: (value: string[]) => void) {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void) {
    this.onTouched = fn;
  }

  writeValue(value: string[]) {
    if (value) {
      this.value = value.map(v => this.tagFormatter(v));
      this.setCurrentNumberOfTags();
    }
  }

  validate() {
    return this.tagError;
  }

  @HostListener('document:click', ['$event'])
  handleClick(event: MouseEvent) {
    if (
      !this.inputElement.nativeElement.contains(event.target) &&
      this.inputElement.nativeElement.value
    ) {
      this.addTag(this.inputElement.nativeElement.value);
    }
  }

  addTag(tag: string) {
    const formattedTag = this.tagFormatter(tag);
    const tagIsEmpty = formattedTag.length === 0;
    const invalidTagLength =
      !formattedTag.length || (this.maxTagLength && formattedTag.length > this.maxTagLength);
    const duplicateTag = this.value.indexOf(formattedTag) > -1;
    const exceedsMaxNumberOfTags =
      this.currentNumberOfTags > this.maxNumberOfTags;

    if (!tagIsEmpty && invalidTagLength) {
      this.tagError = {
        message: `Tag length cannot exceed ${this.maxTagLength} characters`
      };
    }

    if (duplicateTag) {
      this.tagError = { message: 'Cannot add duplicate tag' };
    }

    if (exceedsMaxNumberOfTags) {
      const plural = this.maxNumberOfTags === 1 ? '' : 's';
      this.tagError = {
        message: `Cannot exceed ${this.maxNumberOfTags} tag${plural}`
      };
    }

    if (
      !tagIsEmpty &&
      !invalidTagLength &&
      !duplicateTag &&
      !exceedsMaxNumberOfTags
    ) {
      this.tagError = null;
      this.value.push(formattedTag);
      this.setCurrentNumberOfTags();
      this.inputElement.nativeElement.value = '';
    }

    this.value = this.value;
    this.focus();
  }

  addTagEvent(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;

    this.tagError = null;
    this.value = this.value;

    this.textChange.emit(input.value);
    if (
      event.keyCode === KeyCodes.Backspace &&
      this.prevTagInput.length === 0
    ) {
      this._value.pop();
      this.setCurrentNumberOfTags();
    } else if (
      event.keyCode === KeyCodes.Enter ||
      event.keyCode === KeyCodes.Comma ||
      event.keyCode === KeyCodes.Tab
    ) {
      this.addTag(input.value);
    }

    this.prevTagInput = input.value;
  }

  preventDefaultTabBehavior(event: KeyboardEvent) {
    if (event.keyCode === KeyCodes.Tab && this.prevTagInput.length > 0) {
      event.preventDefault();
    }
  }

  addTagClick(event: MouseEvent, value: string) {
    event.preventDefault();
    if (value.length > 0) {
      this.addTag(value);
    }
  }

  addSuggestedTag(tag: string) {
    this.addTag(tag);
  }

  removeTag(tag: string, event: KeyboardEvent) {
    if (event.keyCode !== KeyCodes.Enter) {
      this.value = this._value.filter(t => t !== tag);
      this.setCurrentNumberOfTags();
    }
  }

  focus() {
    this.inputElement.nativeElement.focus();
  }

  setCurrentNumberOfTags() {
    this.currentNumberOfTags = this.value.length
      ? this.value.toString().split(',').length
      : 0;
  }
}

export function formatter(tag: string): string {
  return tag
    .trim()
    .replace(/(\s|-)+/g, '-')
    .replace(/\,/g, '')
    .toLowerCase();
}
