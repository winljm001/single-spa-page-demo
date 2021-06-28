import { registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from "single-spa-layout";
import microfrontendLayout from "./microfrontend-layout.html";
import * as isActive from "./activityFun";
import "./base.css";
registerApplication(
  "@hj/hj",
  () => System.import("@hj/hj"),
  isActive.contentApp
);
registerApplication(
  "@hj/content-app",
  () => System.import("@hj/content-app"),
  isActive.contentApp
);
registerApplication(
  "@hj/footer",
  () => System.import("@hj/footer"),
  isActive.contentApp
);
registerApplication(
  "@hj/side",
  () => System.import("@hj/side"),
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
