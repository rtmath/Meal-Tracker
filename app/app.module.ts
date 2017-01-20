import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { AddMealComponent }   from './add-meal.component';
import { MealListComponent }   from './meal-list.component';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent,
                  AddMealComponent,
                  MealListComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
