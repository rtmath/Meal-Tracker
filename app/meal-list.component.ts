import { Meal } from './meal.model';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component ({
  selector: 'meal-list',
  template: `
  <ul *ngFor="let meal of meals">
    <li>{{meal.name}}</li>
    <li>{{meal.details}}</li>
    <li>{{meal.calories}}</li>
  </ul>
  `
})

export class MealListComponent {
  @Input() meals: Meal[];
}
