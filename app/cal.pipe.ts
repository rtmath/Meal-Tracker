import { Meal } from './meal.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: "byCal",
  pure: false
})

export class CalPipe implements PipeTransform {
  transform(a: Meal[], filter: string) {
    var output: Meal[] = [];
    switch (filter) {
      case "all":
        output = Array.from(a);
        break;
      case "low":
        output = a.filter(x => x.calories < 500)
        break;
      case "high":
        output = a.filter(x => x.calories > 500);
        break;
      default:
        alert("Invalid filter selected.")
        break;
    }
    return output;
  }
}
