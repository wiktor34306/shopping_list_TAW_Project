import { Directive, ElementRef, Input, OnChanges, Host, Inject, Optional } from '@angular/core';
import { AddItemToListComponent } from '../components/add-item-to-list/add-item-to-list.component';

@Directive({
  selector: '[appImportantListFormat]'
})

export class ImportantListFormatDirective implements OnChanges {
  @Input() important!: boolean;

  constructor(
    private elementRef: ElementRef,
  ) {}

  ngOnChanges() {
    if (this.important) {
      this.elementRef.nativeElement.style.backgroundColor = '#a17763';
    } else {
      this.elementRef.nativeElement.style.backgroundColor = '';
    }

  }
}