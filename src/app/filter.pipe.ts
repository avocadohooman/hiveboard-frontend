import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], searchFollower: string): any[] {
    if (!items){
      return [];
    }
    if (!searchFollower){
      return items;
    }
    searchFollower = searchFollower.toLocaleLowerCase();

    return items.filter(it => {
      return it.toLocaleLowerCase().include(searchFollower);
    });
  }

}
