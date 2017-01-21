# Meal Tracker

## by Ryan Mathisen 1/20/2017

## Description
_This is a simple project demonstrating basic use of Angular 2.0, including concepts such as components, pipes, and two-way databinding utilizing the "data down, actions up" paradigm._

_A user can enter a description of what they ate, along with notes and calories of said meal, and this program will display each meal the user has eaten in a list. The user can filter this list by name of meal, or by calorie count (or both!), and edit entries they have already made. Currently these entries do not persist, and will disappear upon page refresh._

## Requirements
This project requires:
  * npm
  * bower
  * gulp

## Installation
  * Clone this repository to a location on your computer
  * Navigate to that location using your console/terminal and run the following commands:
    * npm install
    * bower install
    * gulp build
    * gulp serve
  * Then navigate to localhost:3000 in your browser and enjoy!

## Technologies Used
  * HTML / CSS3
  * Typescript
  * AngularJS 2.0 RC6
  * SASS

### Known Bugs
 * Clicking 'Edit' while another Meal is being edited will collapse the existing edit but will not open a new one until the user clicks again.

## License
Copyright (c) 2016 Ryan Mathisen

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
