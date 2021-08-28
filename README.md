# MetroTransit Application

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.2.

## Run

Run `ng serve` or `npm run start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` or `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` or `npm run test` to execute the unit tests via [Karma](https://karma-runner.github.io).

Test runner will be visible at http://localhost:9876/
For code coverage, run `npm run test:dev`

## Running end-to-end tests

Run `ng e2e` or `npm run e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Development Assumptions
* The user is accessing application on Chrome, Firefox, or Safari (not verified on other browsers)
* The user is in CST (Central Standard Time Zone)
* The user's screen size is greater than 259px wide.
* The user speaks English, as that is the only available language for this application at this time.
* The user has some familiarity with Metro Transit routes.

## What it's built with

#### Main
* Angular 12.2.0
* Angular CDK 12.2.2
* Angular Material 12.2.2
* TypeScript 4.3.5

#### Testing
* Karma 6.3.0
* Cypress 8.3.1
* NgMocks 12.4.0

##### Developed using Node@16.7.0 & NPM@7.20.3