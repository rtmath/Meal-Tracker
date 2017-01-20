import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'app-root',
  template: `
  <h2>Meal Tracker</h2>
  <add-meal [addNewForm]="addNewForm" (formDisplaySender)="toggleFormDisplay()"></add-meal>
  <hr>

  `
})

export class AppComponent {
  meal: Meal = new Meal("Test meal", "Ate some stuff", 384);
  addNewForm: boolean = false;

  toggleFormDisplay() {
    this.addNewForm = (this.addNewForm) ? false : true;
  }
}
