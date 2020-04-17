import { Pipe, PipeTransform } from '@angular/core';
import { Groups } from './modules/groups/groups.module'

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(group: Groups[], searchFollower: string) {
    if (!group || !searchFollower) {
      return group;
    }
    return group.filter(group =>
      group.name.toLocaleLowerCase().indexOf(searchFollower.toLocaleLowerCase()) !== -1);
  }
}

