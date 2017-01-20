import { Meal } from './meal.model';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component ({
  selector: 'meal-list',
  template: `
  <div *ngFor="let meal of meals | byName:nameFilter | byCal:calFilter" class="meal-info">
    <div class="meal-name">{{meal.name}}</div>
    <div class="meal-details">{{meal.details}}
    <div class="meal-calories">Calories: {{meal.calories}}</div></div>
    <div class="button meal-button" (click)="setSelectedMeal(meal);toggleEditFormDisplay()">Edit</div>
    <meal-edit *ngIf="meal===selectedMeal && editForm" [selectedMeal]="selectedMeal"></meal-edit>
  </div>
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
