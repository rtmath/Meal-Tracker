import { Meal } from './meal.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: "completeness",
  pure: false
})

export class CompletenessPipe implements PipeTransform {
  transform(a: Meal[], filter: string) {
    var output: Meal[] = [];
    for (var i = 0; i < a.length; i++) {
      if (a[i].name.includes(filter)) {
        output.push(a[i]);
      }
    }
    return output;
  }
}
