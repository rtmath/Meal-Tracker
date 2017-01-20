import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'app-root',
  template: `
  <h2>Meal Tracker</h2>

  <add-meal
    [addNewForm]="addNewForm"
    (formDisplaySender)="toggleAddFormDisplay()" (addMealSender)="addNewMeal($event)">
  </add-meal>
  <hr>
  <meal-filter
    [(currentFilter)]="filter" (onChange)="filter = $event.value">
  </meal-filter>
  <meal-list
    [meals]="meals"
    [selectedMeal]="selectedMeal"
    [editForm]="editForm"
    [filter]="filter"
    (setSelectedMealSender)="setSelectedMeal($event)"
    (editFormDisplaySender)="toggleEditFormDisplay()">
  </meal-list>
  `
})

export class AppComponent {
  meals: Meal[] = [
    new Meal("Chicken and brocolli", "Yum", 300),
    new Meal("Mac and cheese", "Also yummy", 350)
  ];

  addNewForm: boolean = false;
  editForm: boolean = false;
  selectedMeal: Meal = null;
  filter: string = "";

  toggleAddFormDisplay() {
    this.addNewForm = (this.addNewForm) ? false : true;
  }
  toggleEditFormDisplay() {
    this.editForm = (this.editForm) ? false : true;
  }

  addNewMeal(meal: Meal) {
    this.meals.push(meal);
  }

  setSelectedMeal(meal: Meal) {
    this.selectedMeal = meal;
  }
}
