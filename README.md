# Contributors Hunter (Test assignment)

Application allows to peek the contributors of the repositories of the arbitrary public GitHub organization.

# Application description

The main page consists of available organizations.
User can search upon organizations and pick one. If organization name is well-known it's possible to toggle search to 'exact search mode'. In this mode user redirects to organization page right away after enter organization name into input search field.
On the organization page is possible to observe main information, repositories, contributors and members of the organization.
User is able to add members to favorite list. Favorites page available on clicking heart icon on the top right window corner. It's also possible to remove members from favorites.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## GitHub Pages deployment

Directory `.github/workflows` consists of `workflow.yml` file which runs gh-build script and deploys app.
Application is available at https://artur-sg.github.io/contributors-hunter/

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
