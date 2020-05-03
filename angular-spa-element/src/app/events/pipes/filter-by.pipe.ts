import { Pipe, PipeTransform } from '@angular/core';

import { Event } from "../models/event";

@Pipe({
  name: 'filterBy'
})
export class FilterByPipe implements PipeTransform {
  transform(value: Event[], ...args: string[]): Event[] {
    let filter: string = args[0] ? args[0].toLocaleLowerCase() : null;
    return filter ? value.filter(event => event.eventName.toLocaleLowerCase().indexOf(filter) !== -1) : value;
  }
}
