import { registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from "single-spa-layout";
import microfrontendLayout from "./microfrontend-layout.html";
import * as isActive from "./activity-functions";

registerApplication(
  "@mydemo/single-spa-demo-nav",
  () => System.import("@mydemo/single-spa-demo-nav"),
  isActive.nav
);

registerApplication(
  "@mydemo/page1",
  () => System.import("@mydemo/page1"),
  isActive.page1
);

registerApplication(
  "single-spa-demo-page-2",
  () => System.import("single-spa-demo-page-2"),
  isActive.page2
);

const routes = constructRoutes(microfrontendLayout);
const applications = constructApplications({
  routes,
  loadApp({ name }) {
    return System.import(name);
  },
});
const layoutEngine = constructLayoutEngine({ routes, applications });

applications.forEach(registerApplication);
layoutEngine.activate();
start();
