import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'app-root',
  template: `
  <h2>Meal Tracker</h2>
  <add-meal [addNewForm]="addNewForm" (formDisplaySender)="toggleFormDisplay()" (addMealSender)="addNewMeal($event)"></add-meal>
  <hr>
  <ul *ngFor="let meal of meals">
    <li>{{meal.name}}</li>
    <li>{{meal.details}}</li>
    <li>{{meal.calories}}</li>
  </ul>
  `
})

export class AppComponent {
  meals: Meal[] = [];
  addNewForm: boolean = false;

  toggleFormDisplay() {
    this.addNewForm = (this.addNewForm) ? false : true;
  }

  addNewMeal(meal: Meal) {
    this.meals.push(meal);
  }
}
