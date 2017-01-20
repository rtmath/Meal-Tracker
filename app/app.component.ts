import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'app-root',
  template: `
  <h2>Meal Tracker</h2>
  <add-meal [addNewForm]="addNewForm" (formDisplaySender)="toggleFormDisplay()" (addMealSender)="addNewMeal($event)"></add-meal>
  <hr>
  <meal-list [meals]="meals"></meal-list>
  `
})

export class AppComponent {
  meals: Meal[] = [
    new Meal("Chicken and brocolli", "Yum", 300),
    new Meal("Mac and cheese", "Also yummy", 350)
  ];
  addNewForm: boolean = false;

  toggleFormDisplay() {
    this.addNewForm = (this.addNewForm) ? false : true;
  }

  addNewMeal(meal: Meal) {
    this.meals.push(meal);
  }
}
