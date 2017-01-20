import { Meal } from './meal.model';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component ({
  selector: "add-meal",
  template: `
    <button *ngIf="!addNewForm" (click)="toggleFormDisplay()">Add Meal</button>
    <div *ngIf="addNewForm">
      <label>Meal Name</label><br>
      <input type="text"><br>
      <label>Details</label><br>
      <input type="text"><br>
      <label>Calories</label><br>
      <input type="number"><br>
      <button (click)="toggleFormDisplay()">Track Meal</button>
    </div>
  `
})

export class AddMealComponent {
  @Input() addNewForm: boolean;
  @Output() formDisplaySender = new EventEmitter();

  toggleFormDisplay() {
    this.formDisplaySender.emit();
  }

}
