import { Meal } from './meal.model';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component ({
  selector: "meal-filter",
  template: `
  <div>
    <label>Filter by food name:</label>
    <input [(ngModel)]="currentNameFilter" (ngModelChange)="changeName()">
    <label>Filter by calories:</label>
    <select [(ngModel)]="currentCalFilter" (ngModelChange)="changeCal()">
      <option value="all">All Foods</option>
      <option value="low">Lower Calorie (<500) foods</option>
      <option value="high">Higher Calorie(>500) foods</option>
    </select>
  </div>
  `
})

export class MealFilterComponent {
  @Input() currentNameFilter: string;
  @Input() currentCalFilter: number;
  @Output() onNameChange = new EventEmitter();
  @Output() onCalChange = new EventEmitter();
  changeName() {
    this.onNameChange.emit({value: this.currentNameFilter});
  }
  changeCal() {
    this.onCalChange.emit({value: this.currentCalFilter});
  }
}
