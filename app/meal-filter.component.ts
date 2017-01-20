import { Meal } from './meal.model';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component ({
  selector: "meal-filter",
  template: `
  <div>
    <input [(ngModel)]="currentFilter" (ngModelChange)="change()">
  </div>
  `
})

export class MealFilterComponent {
  @Input() currentFilter: string;
  @Output() onChange = new EventEmitter();
  change() {
    this.onChange.emit({value: this.currentFilter});
  }
}
