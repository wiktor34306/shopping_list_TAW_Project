import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {
  transform(value: string): string {

    const parts = value.split('.');
    const year = parts[2];
    const month = parts[1];
    const day = parts[0];

    return `${year}-${month}-${day}`;
  }
}