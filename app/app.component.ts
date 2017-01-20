import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'app-root',
  template: `
  <h2>Meal Tracker</h2>
  {{meal.name}}<br>
  {{meal.details}}<br>
  {{meal.calories}}<br>
  `
})

export class AppComponent {
  meal: Meal = new Meal("Test meal", "Ate some stuff", 384);
}
