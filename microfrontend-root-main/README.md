Sample exercise to demonstrate the use of microfrontend using single spa framework (https://single-spa.js.org/docs/getting-started-overview).
This repository is used as the root config of other microfrontend applications.

In order to run the microfrontend locally, each microfrontend applications need to be run separately. Look at each of the microfrontend's **package.json** file on which command to run.

Once each microfrontend applications have been run locally, run this root config locally as well (see **package.json** file on which command to run).

below are descriptions on how to observe the embedded microfrontend applications:

- **nav** will always be visible across all pages and is developed using React
- go to **/page1** to run the Vue microfrontend application
- go to **/page2** to run the Angular microfrontend application
