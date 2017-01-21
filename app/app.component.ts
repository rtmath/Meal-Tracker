import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="header">
    <h2>Meal Tracker</h2>

    <add-meal
      [addNewForm]="addNewForm"
      (formDisplaySender)="toggleAddFormDisplay()" (addMealSender)="addNewMeal($event)">
    </add-meal>
  </div>

  <div class="content-body">
    <div class="filter-body">
      <meal-filter
        [(currentNameFilter)]="nameFilter"
        (onNameChange)="nameFilter = $event.value"
        (onCalChange)="calFilter = $event.value"
        (clearFilterSender)="clearFilter()">
      </meal-filter>
    </div>
    <meal-list
      [meals]="meals"
      [selectedMeal]="selectedMeal"
      [editForm]="editForm"
      [nameFilter]="nameFilter"
      [calFilter]="calFilter"
      (setSelectedMealSender)="setSelectedMeal($event)"
      (editFormDisplaySender)="toggleEditFormDisplay()">
    </meal-list>
  </div>
  `
})

export class AppComponent {
  meals: Meal[] = [
    new Meal("Test", "Test", 300),
    new Meal("Test", "Test", 300),
    new Meal("Test", "Test", 300)
  ];

  addNewForm: boolean = false;
  editForm: boolean = false;
  selectedMeal: Meal = null;
  nameFilter: string = "";
  calFilter: string = "all";

  toggleAddFormDisplay() {
    this.addNewForm = (this.addNewForm) ? false : true;
  }
  toggleEditFormDisplay() {
    this.editForm = (this.editForm) ? false : true;
  }

  addNewMeal(meal: Meal) {
    this.meals.push(meal);
  }

  clearFilter() {
    this.nameFilter = "";
  }

  setSelectedMeal(meal: Meal) {
    this.selectedMeal = meal;
  }
}
