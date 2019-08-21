import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'subDetaile'
})
export class SubDetailePipe implements PipeTransform {

  transform(details:string,length:number): string {
    return  details.substr(0,length) +' ...';
  }

}
