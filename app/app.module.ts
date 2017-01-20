import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }   from './app.component';
import { AddMealComponent }   from './add-meal.component';
import { MealListComponent }   from './meal-list.component';
import { MealEditComponent }   from './meal-edit.component';
import { CompletenessPipe } from './completeness.pipe';

@NgModule({
  imports: [ BrowserModule,
              FormsModule ],
  declarations: [ AppComponent,
                  AddMealComponent,
                  MealListComponent,
                  MealEditComponent,
                  CompletenessPipe ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
