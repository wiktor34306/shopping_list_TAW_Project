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

      this.elementRef.nativeElement.style.backgroundColor = '#0bab2f';
      this.elementRef.nativeElement.style.color = '#fff';
      this.elementRef.nativeElement.style.fontSize = '18pt';
      this.elementRef.nativeElement.style.border = '3px solid';
      this.elementRef.nativeElement.style.borderColor = 'white';
      this.elementRef.nativeElement.style.boxShadow = '2px 2px 4px rgba(1, 1, 1, 5)';
    } else {
      this.elementRef.nativeElement.style.backgroundColor = '';
    }

  }
}