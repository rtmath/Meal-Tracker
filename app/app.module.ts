import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { AddMealComponent }   from './add-meal.component';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent,
                  AddMealComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
