import { Meal } from './meal.model';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component ({
  selector: "meal-filter",
  template: `
  <div class="filter1">
    <label>Filter by food name:</label>
    <input [(ngModel)]="currentNameFilter" (ngModelChange)="changeName()">
  </div>
  <div class="filter2">
    <label>Filter by calories:</label>
    <select [(ngModel)]="currentCalFilter" (ngModelChange)="changeCal()">
      <option value="all">All Foods</option>
      <option value="low">Lower Calorie Foods(<500) foods</option>
      <option value="high">Higher Calorie Foods(>500) foods</option>
    </select>
  </div>
  <div class="filter-button">
    <div class="button" (click)="clearFilter()">Clear Name Filter</div>
  </div>
  `
})

export class MealFilterComponent {
  @Input() currentNameFilter: string;
  @Input() currentCalFilter: number;
  @Output() onNameChange = new EventEmitter();
  @Output() onCalChange = new EventEmitter();
  @Output() clearFilterSender = new EventEmitter();
  changeName() {
    this.onNameChange.emit({value: this.currentNameFilter});
  }
  changeCal() {
    this.onCalChange.emit({value: this.currentCalFilter});
  }
  clearFilter() {
    this.clearFilterSender.emit();
  }
}
