import { Meal } from './meal.model';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component ({
  selector: "add-meal",
  template: `
    <div class="button" *ngIf="!addNewForm" (click)="toggleFormDisplay()">Add Meal</div>
    <div *ngIf="addNewForm">
      <label>Meal Name</label><br>
      <input #newName type="text"><br>
      <label>Details</label><br>
      <input #newDetails type="text"><br>
      <label>Calories</label><br>
      <input #newCalories type="number"><br>
      <div class="button"
        (click)="toggleFormDisplay();
        addMeal(newName.value, newDetails.value, newCalories.value);">
        Track Meal</div>
    </div>
  `
})

export class AddMealComponent {
  @Input() addNewForm: boolean;
  @Output() formDisplaySender = new EventEmitter();
  @Output() addMealSender = new EventEmitter();

  toggleFormDisplay() {
    this.formDisplaySender.emit();
  }

  addMeal(name: string, details: string, calories: number) {
    this.addMealSender.emit(new Meal(name, details,calories));
  }
}
