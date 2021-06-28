import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import Root from "./App";

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Root,
  domElementGetter,
  errorBoundary(err, info, props) {
    // Customize the root error boundary for your microfrontend here.
    return null;
  },
});
function domElementGetter() {
  let el = document.getElementById("footer");
  if (!el) {
    el = document.createElement("div");
    el.id = "footer";
    document.body.appendChild(el);
  }

  return el;
}
export const { bootstrap, mount, unmount } = lifecycles;
