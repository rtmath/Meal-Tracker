import { Meal } from './meal.model';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component ({
  selector: 'meal-list',
  template: `
  <ul *ngFor="let meal of meals | byName:nameFilter | byCal:calFilter">
    <li>{{meal.name}}</li>
    <li>{{meal.details}}</li>
    <li>{{meal.calories}}</li>
    <div class="button" (click)="setSelectedMeal(meal);toggleEditFormDisplay()">Edit</div>
    <meal-edit *ngIf="meal===selectedMeal && editForm" [selectedMeal]="selectedMeal"></meal-edit>
  </ul>
  `
})

export class MealListComponent {
  @Input() meals: Meal[];
  @Input() selectedMeal: Meal;
  @Input() editForm: boolean;
  @Input() nameFilter: string;
  @Input() calFilter: string;
  @Output() setSelectedMealSender = new EventEmitter();
  @Output() editFormDisplaySender = new EventEmitter();

  setSelectedMeal(meal: Meal) {
    this.setSelectedMealSender.emit(meal);
  }
  toggleEditFormDisplay() {
    this.editFormDisplaySender.emit();
  }
}
