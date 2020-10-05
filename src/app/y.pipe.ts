import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'y'
})
export class YPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}