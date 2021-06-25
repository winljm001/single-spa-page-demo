import { registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from "single-spa-layout";
import microfrontendLayout from "./microfrontend-layout.html";
import * as isActive from "./activityFun";
registerApplication(
  "content-app",
  () => System.import("content-app"),
  isActive.contentApp
);
registerApplication(
  "@hj/hj",
  () => System.import("@hj/hj"),
  isActive.contentApp
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
