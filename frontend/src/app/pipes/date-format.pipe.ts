import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {
  transform(value: string): string {
    const date = new Date(value); // Parsowanie wartości jako obiektu Date
    const year = date.getFullYear().toString().padStart(4, '0'); // padStart wypełnia bieżący ciąg innym ciągiem, w razie potrzeby wielokrotnie, aż osiągnie pożądaną długość. 
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // tutaj mają być 2 znaki. Więc jeśli nie będzie dwóch, to zostanie dodane 0
    const day = date.getDate().toString().padStart(2, '0');

    return `${day}-${month}-${year}`;
  }
}
