import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'columnFormatter'
})
export class ColumnFormatterPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    if(!value) return value;
    return value.replace(/([A_Z])/g, ' $1')
        .replace(/^./, function(title) { return title.toLocaleUpperCase()})
  }

}
