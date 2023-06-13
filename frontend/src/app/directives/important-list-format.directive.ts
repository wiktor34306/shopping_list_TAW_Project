// import { Directive, ElementRef, Input, OnChanges, Host, Inject, Optional } from '@angular/core';
// import { AddItemToListComponent } from '../components/add-item-to-list/add-item-to-list.component';

// @Directive({
//   selector: '[appImportantListFormat]'
// })
// export class ImportantListFormat implements OnInit {
//   @Input() isImportant: boolean;

//   constructor(private elementRef: ElementRef, 
//     @Host() @Optional() @Inject(AddItemToListComponent) private taskList: AddItemToListComponent
//   ) {}

//   ngOnInit() {
//     if (this.isImportant) {
//       this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', '#FFCDD2');
//       this.renderer.setStyle(this.elementRef.nativeElement, 'color', '#B71C1C');
//       this.renderer.setStyle(this.elementRef.nativeElement, 'font-size', '18px');
//       this.renderer.setStyle(this.elementRef.nativeElement, 'box-shadow', '0 2px 4px 0 rgba(0, 0, 0, 0.2)');
//     }
//   }
// }
