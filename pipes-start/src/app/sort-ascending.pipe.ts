import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortAscending'
})
export class SortAscendingPipe implements PipeTransform {

  transform(value: any, propName: any) {
    return value.sort((a: any, b: any) => a[propName].localeCompare(b[propName]));
  }

}
