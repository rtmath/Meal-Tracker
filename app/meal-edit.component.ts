import { Meal } from './meal.model';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component ({
  selector: 'meal-edit',
  template: `
    <div>
      <label>Name</label>
      <input [(ngModel)]="selectedMeal.name">
      <label>Details</label>
      <input [(ngModel)]="selectedMeal.details">
      <label>Calories</label>
      <input [(ngModel)]="selectedMeal.calories" type="number">
    </div>
  `
})

export class MealEditComponent {
  @Input() selectedMeal: Meal;
}
